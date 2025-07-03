package com.examples.spring.boot;

import com.examples.spring.boot.config.ApplicationConfig;
import com.examples.spring.boot.model.Greetings;
import org.apache.logging.log4j.spi.LoggerContextFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
// @ComponentScan, @Configuration, @EnableAutoConfiguration
public class SpringBootFeaturesDemoApplication implements CommandLineRunner {
	// sfl4j
	// log4j <-> logback <-> jcl
	private static Logger log = LoggerFactory.getLogger(SpringBootFeaturesDemoApplication.class);

	@Autowired
	ApplicationContext ctx;

	@Autowired
	ApplicationConfig config;

	public static void main(String[] args) {
		System.out.println("Before launching app...");
		// Launches SpringBoot App
		SpringApplication.run(SpringBootFeaturesDemoApplication.class, args);
		// create application context
		// instantiates and wires the beans
		// todo
		// launch the app
		System.out.println("After launching app...");

	}

	@Override
	public void run(String... args) throws Exception {
//		System.out.println("inside run");
//		System.out.println("Container: " + ctx);
//		System.out.println(ctx.getBeanDefinitionCount());
//
////		for(String beanName : ctx.getBeanDefinitionNames()) {
////			System.out.println(beanName);
////		}
//
//		Greetings greetings = ctx.getBean("greetings", Greetings.class);
//		// TRACE
//		// DEBUG
//		// INFO
//		// WARN
//		// ERROR
//		log.trace("TRACE: " + greetings.getMessage());
//		log.debug("DEBUG: " + greetings.getMessage());
//		log.info("INFO: " + greetings.getMessage());
//		log.warn("WARN: " + greetings.getMessage());
//		log.error("ERROR: " + greetings.getMessage());

		log.info("{} {}", config.getName(), config.getMessage());
	}

}
