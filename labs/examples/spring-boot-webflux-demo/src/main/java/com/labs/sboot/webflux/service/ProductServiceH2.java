package com.labs.sboot.webflux.service;

import com.labs.sboot.webflux.repo.ProductRepository;
import com.labs.sboot.webflux.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@Service("productServiceH2")
public class ProductServiceH2 implements IProductService {
  private final ProductRepository productRepository;

  @Autowired
  public ProductServiceH2(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public Flux<Product> getAllProducts() {
    return productRepository.findAll();
  }

  public Mono<Product> getProductById(String id) {
    return productRepository.findById(id);
  }

  public Mono<Product> createProduct(Product product) {
    return productRepository.existsById(product.getId())
        .flatMap(exists -> {
          if (exists) {
            return Mono.error(new ResponseStatusException(HttpStatus.CONFLICT, "Product already exists"));
          } else {
            return productRepository.save(product);
          }
        });
  }

  public Mono<Product> updateProduct(String id, Product updatedProduct) {
    return productRepository.findById(id)
        .flatMap(existing -> {
          updatedProduct.setId(id);
          return productRepository.save(updatedProduct);
        })
        .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found")));
  }

  public Mono<Void> deleteProduct(String id) {
    return productRepository.findById(id)
        .flatMap(existing -> productRepository.deleteById(id))
        .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found")));
  }
}