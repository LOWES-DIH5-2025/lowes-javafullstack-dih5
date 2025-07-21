package com.labs.sboot.webflux.service;

import com.labs.sboot.webflux.model.Product;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class ProductService implements IProductService {
  private final Map<String, Product> productMap = new ConcurrentHashMap<>();

  {
    productMap.put("1", new Product("1", "Apple", 0.99));
    productMap.put("2", new Product("2", "Banana", 0.59));
    productMap.put("3", new Product("3", "Orange", 1.29));
  }

  public Flux<Product> getAllProducts() {
    return Flux.fromIterable(productMap.values());
  }

  public Mono<Product> getProductById(String id) {
    Product product = productMap.get(id);
    return product != null ? Mono.just(product) : Mono.empty();
  }

  public Mono<Product> createProduct(Product product) {
    productMap.put(product.getId(), product);
    return Mono.just(product);
  }

  public Mono<Product> updateProduct(String id, Product updatedProduct) {
    if (productMap.containsKey(id)) {
      updatedProduct.setId(id);
      productMap.put(id, updatedProduct);
      return Mono.just(updatedProduct);
    } else {
      return Mono.empty();
    }
  }

  public Mono<Void> deleteProduct(String id) {
    productMap.remove(id);
    return Mono.empty();
  }
}