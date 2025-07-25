package com.examples.spring.boot.kafka;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.annotation.TopicPartition;

@SpringBootApplication
public class SpringBootKafkaConsumerApplication {
	
	Logger logger = LoggerFactory.getLogger(SpringBootKafkaConsumerApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringBootKafkaConsumerApplication.class, args);
	}
	
	// Consume message as String 	
	@KafkaListener(topics = {"test"}, groupId = "test-group")
	public void consumeMessageAsString(String message) {
		logger.info("#1 Consume message as String - Received message - {}", message);
	}

	@KafkaListener(topics = {"demo"}, groupId = "demo-group")
	public void consumeMessageAsString1(String message) {
		logger.info("#1 Consume message as String - Received message - {}", message);
	}

	@KafkaListener(topics = {"demo"}, groupId = "demo-group")
	public void consumeMessageAsString2(String message) {
		logger.info("#2 Consume message as String - Received message - {}", message);
	}

	@KafkaListener(topics = {"demo"}, groupId = "demo-group")
	public void consumeMessageAsString3(String message) {
		logger.info("#3 Consume message as String - Received message - {}", message);
	}


	// Consume message as Greeting object
	@KafkaListener(topics = {"test1"},
			groupId = "test-group1",
			containerFactory = "greetingKafkaListenerContainerFactory")
	public void consumeMessageAsObject(Greeting greeting) {
		logger.info("Consume message as Object - Received message - {}", greeting);
	}
	
	// Consume message as Consumer Record
	@KafkaListener(
		topics = {"test1"},
		groupId = "test-group2",
		containerFactory = "greetingKafkaListenerContainerFactory"
	)
	public void consumeMessageAsConsumerRecord(ConsumerRecord<String, Greeting> message) {
		Greeting greeting = message.value();
		logger.info("Consume message as Consumer Record - Received message - {}", greeting);
		// print consumer record details
		logger.info("Consumer Record Details - Topic: {}, Partition: {}, Offset: {}, Key: {}, Value: [{}]",
				message.topic(), message.partition(), message.offset(), message.key(), message.value());
	}

	
	// START - Consume message with multiple consumer instances
	
//	@KafkaListener(topics = {"greetings"}, groupId = "greetings-group")
//	public void consumeMessageAsString(String message) {
//		logger.info("Group #1 Consumer #1 - Received message - {}", message);
//	}
	
//	@KafkaListener(topics = {"greetings"}, groupId = "greetings-group")
//	public void consumeMessage1(String message) {
//		logger.info("Group #1 Consumer #2 - Received message - {}", message);
//	}
//
//	@KafkaListener(topics = {"greetings"}, groupId = "greetings-group")
//	public void consumeMessage2(String message) {
//		logger.info("Group #1 Consumer #3 - Received message - {}", message);
//	}
//
//	@KafkaListener(topics = {"greetings"}, groupId = "greetings-group")
//	public void consumeMessage3(String message) {
//		logger.info("Group #1 Consumer #4 - Received message - {}", message);
//	}
	
	// END - Consume message with multiple consumer instances	
	

	// Consume message with multiple consumer groups
//	@KafkaListener(topics = {"greetings"}, groupId = "greetings-group1")
//	public void consumeMessage4(String message) {
//		logger.info("Group #2 Consumer #1 - Received message - {}", message);
//	}
	
	// Consume message from specific partition
//	@KafkaListener(topicPartitions
//			  = @TopicPartition(topic = "test", partitions = { "0", "1", "2" }), groupId = "test-group2")
//	public void consumeMessageByPartition(String message) {
//		logger.info("Consume Message from Partition # 0, 1, 2 - Received message - {}", message);
//	}

}
