package com.labs.sboot.webflux.controller;

import com.labs.sboot.webflux.service.IProductService;
import com.labs.sboot.webflux.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/products")
public class ProductController {
  private final IProductService productService;
  private final IProductService productServiceH2;

  @Value("${product.useH2:false}")
  private boolean useH2;

  @Autowired
  public ProductController(@Qualifier("productService") IProductService productService,
      @Qualifier("productServiceH2") IProductService productServiceH2) {
    this.productService = productService;
    this.productServiceH2 = productServiceH2;
  }


  private IProductService getActiveService() {
    return useH2 ? productServiceH2 : productService;
  }

  @GetMapping
  public Flux<Product> getAllProducts() {
    return getActiveService().getAllProducts();
  }

  @GetMapping("/{id}")
  public Mono<Product> getProductById(@PathVariable String id) {
    return getActiveService().getProductById(id)
        .switchIfEmpty(Mono.error(new org.springframework.web.server.ResponseStatusException(
            org.springframework.http.HttpStatus.NOT_FOUND, "Product not found")));
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Mono<Product> createProduct(@RequestBody Product product) {
    return getActiveService().createProduct(product);
  }

  @PutMapping("/{id}")
  public Mono<Product> updateProduct(@PathVariable String id, @RequestBody Product product) {
    return getActiveService().updateProduct(id, product);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public Mono<Void> deleteProduct(@PathVariable String id) {
    return getActiveService().deleteProduct(id);
  }
}