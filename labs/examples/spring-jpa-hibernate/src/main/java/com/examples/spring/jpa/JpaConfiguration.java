package com.examples.spring.jpa;

import java.util.HashMap;
import java.util.Map;

import org.hibernate.dialect.H2Dialect;
//import org.hibernate.dialect.MySQL8Dialect;
import org.hibernate.dialect.PostgreSQLDialect;
import org.postgresql.ds.PGSimpleDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

//import com.mysql.cj.jdbc.MysqlDataSource;

@Configuration
public class JpaConfiguration {

	// Enable for H2
//	@Value("#{dataSource}")
//	private javax.sql.DataSource dataSource;
	
//	@Bean
//	public MysqlDataSource dataSource() {
//		MysqlDataSource dataSource = new MysqlDataSource();
//		dataSource.setDatabaseName("hibernate_training");
//		dataSource.setUser("training");
//		dataSource.setPassword("training");
//		dataSource.setServerName("localhost");
//		return dataSource;
//	}

	@Bean
	public PGSimpleDataSource dataSource() {
		PGSimpleDataSource dataSource = new PGSimpleDataSource();
		dataSource.setDatabaseName("training");
		dataSource.setUser("postgres");
		dataSource.setPassword("postgres");
		dataSource.setServerNames(new String[]{"localhost"});
		return dataSource;
	}

	@Bean
	public Map<String, Object> jpaProperties() {
		Map<String, Object> props = new HashMap<String, Object>();
//		props.put("hibernate.dialect", H2Dialect.class.getName());
//		props.put("hibernate.dialect", MySQL8Dialect.class.getName());
		props.put("hibernate.dialect", PostgreSQLDialect.class.getName());

		return props;
	}

	@Bean
	public JpaVendorAdapter jpaVendorAdapter() {
		HibernateJpaVendorAdapter hibernateJpaVendorAdapter = new HibernateJpaVendorAdapter();
		hibernateJpaVendorAdapter.setShowSql(false);
		hibernateJpaVendorAdapter.setGenerateDdl(true);
//		hibernateJpaVendorAdapter.setDatabase(Database.H2);
//		hibernateJpaVendorAdapter.setDatabase(Database.MYSQL);
		hibernateJpaVendorAdapter.setDatabase(Database.POSTGRESQL);

		return hibernateJpaVendorAdapter;
	}

	@Bean
	public PlatformTransactionManager transactionManager() {
		return new JpaTransactionManager( localContainerEntityManagerFactoryBean().getObject() );
	}

	@Bean
	public LocalContainerEntityManagerFactoryBean localContainerEntityManagerFactoryBean() {
		LocalContainerEntityManagerFactoryBean lef = new LocalContainerEntityManagerFactoryBean();

//		lef.setDataSource(this.dataSource); // Enable for H2
		lef.setDataSource(this.dataSource());
		lef.setJpaPropertyMap(this.jpaProperties());
		lef.setJpaVendorAdapter(this.jpaVendorAdapter());
		return lef;
	}

}
