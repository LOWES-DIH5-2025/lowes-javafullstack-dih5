package com.labs.sboot.webflux;

import com.labs.sboot.webflux.model.Product;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Mono;

@SpringBootTest
@AutoConfigureWebTestClient
public class ProductControllerClientTest {

  @Autowired
  private WebTestClient webTestClient;

  private Product testProduct;

  @BeforeEach
  void setUp() {
    testProduct = new Product("100", "TestProduct", 9.99);
  }

  @Test
  void testGetAllProducts() {
    webTestClient.get().uri("/products")
        .exchange()
        .expectStatus().isOk()
        .expectBodyList(Product.class)
        .hasSize(3); // 3 initial products
  }

  @Test
  void testGetProductById() {
    webTestClient.get().uri("/products/1")
        .exchange()
        .expectStatus().isOk()
        .expectBody()
        .jsonPath("$.name").isEqualTo("Apple");
  }

  @Test
  void testCreateProduct() {
    webTestClient.post().uri("/products")
        .body(Mono.just(testProduct), Product.class)
        .exchange()
        .expectStatus().isCreated()
        .expectBody()
        .jsonPath("$.id").isEqualTo("100")
        .jsonPath("$.name").isEqualTo("TestProduct");
  }

  @Test
  void testUpdateProduct() {
    Product updated = new Product("100", "UpdatedProduct", 19.99);
    // First, create the product
    webTestClient.post().uri("/products")
        .body(Mono.just(testProduct), Product.class)
        .exchange()
        .expectStatus().isCreated();
    // Then, update it
    webTestClient.put().uri("/products/100")
        .body(Mono.just(updated), Product.class)
        .exchange()
        .expectStatus().isOk()
        .expectBody()
        .jsonPath("$.name").isEqualTo("UpdatedProduct")
        .jsonPath("$.price").isEqualTo(19.99);
  }

  @Test
  void testDeleteProduct() {
    // First, create the product
    webTestClient.post().uri("/products")
        .body(Mono.just(testProduct), Product.class)
        .exchange()
        .expectStatus().isCreated();
    // Then, delete it
    webTestClient.delete().uri("/products/100")
        .exchange()
        .expectStatus().isNoContent();
    // Verify deletion
    webTestClient.get().uri("/products/100")
        .exchange()
        .expectStatus().isNotFound();
  }
}