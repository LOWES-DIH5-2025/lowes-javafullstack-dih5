package com.labs.sboot.webflux.repo;

import com.labs.sboot.webflux.model.Product;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface ProductRepository extends ReactiveCrudRepository<Product, String> {
}