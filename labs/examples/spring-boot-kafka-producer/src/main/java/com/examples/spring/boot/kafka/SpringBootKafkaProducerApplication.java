package com.examples.spring.boot.kafka;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@SpringBootApplication
@RestController
public class SpringBootKafkaProducerApplication {
	
	Logger logger = LoggerFactory.getLogger(SpringBootKafkaProducerApplication.class);
	
	@Autowired
	KafkaTemplate<String, String> strKafkaTemplate;
	
	@Autowired
	KafkaTemplate<String, Greeting> objKafkaTemplate;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootKafkaProducerApplication.class, args);
	}

	// http://localhost:7071/publish?topic=test	
	@PostMapping("/publish")
	public String publish(@RequestParam String topic, @RequestBody String message) {
		logger.info("Publishing message '{}' to '{}' topic", message, topic);
//		strKafkaTemplate.send(topic, message);
		 // To ensure message key is unique, we can use a random number as key, required for partitioning
		strKafkaTemplate.send(topic, String.valueOf(new Random().nextInt()), message);
		return "Message published successfully";
	}

	// http://localhost:7071/publishObj?topic=test1
	@PostMapping("/publishObj")
	public String publishObject(@RequestParam String topic, @RequestBody Greeting message) {
		logger.info("Publishing message '{}' to '{}' topic", message, topic);
//		strKafkaTemplate.send(topic, message);
		 // To ensure message key is unique, we can use a random number as key, required for partitioning
		objKafkaTemplate.send(topic, String.valueOf(new Random().nextInt()), message);
		return "Message published successfully";
	}	

}
