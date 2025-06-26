package com.examples.spring.hibernate;

import java.util.Properties;

//import com.mysql.cj.jdbc.MysqlDataSource;
//import org.hibernate.dialect.MySQL8Dialect;
import org.postgresql.ds.PGSimpleDataSource;
import org.hibernate.dialect.PostgreSQLDialect;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;


@Configuration
public class HibernateConfiguration {

	// for H2
//	@Value("#{dataSource}")
//	private DataSource dataSource;
	
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
	public LocalSessionFactoryBean sessionFactoryBean() {
		Properties props = new Properties();
//		props.put("hibernate.dialect", H2Dialect.class.getName());
		props.put("hibernate.dialect", PostgreSQLDialect.class.getName());
//		props.put("hibernate.dialect", MySQL8Dialect.class.getName());
		props.put("hibernate.show_sql", "true");
		props.put("hibernate.format_sql", "true");
		props.put("hibernate.hbm2ddl.auto", "create");

		LocalSessionFactoryBean bean = new LocalSessionFactoryBean();
		bean.setAnnotatedClasses(new Class[]{Item.class, Order.class});		
		bean.setHibernateProperties(props);
		bean.setDataSource(dataSource());  	// for Postgres & MySQL
//		bean.setDataSource(dataSource);  	// for H2
		return bean;
	}
	
	// equivalent xml configuration
	/*
	<beans:bean id="sessionFactoryBean"	class="org.springframework.orm.hibernate3.annotation.AnnotationSessionFactoryBean">
		<!-- datasource detail -->
		<beans:property name="dataSource" ref="dataSource" />
	
		<!-- hibernate properties -->
		<beans:property name="hibernateProperties">
			<beans:props>
				<beans:prop key="hibernate.dialect">org.hibernate.dialect.MySQLDialect
				</beans:prop>
				<beans:prop key="hibernate.show_sql">true</beans:prop>
				<beans:prop key="hibernate.hbm2ddl.auto">create</beans:prop>
			</beans:props>
		</beans:property>
		
		<beans:property name="annotatedClasses">
			<beans:list>
				<beans:value>com.examples.spring.hibernate.Order</beans:value>
				<beans:value>com.examples.spring.hibernate.Item</beans:value>					
			</beans:list>
		</beans:property>	
	</beans:bean>
	*/
	

	@Bean
	public HibernateTransactionManager transactionManager() {
		return new HibernateTransactionManager( sessionFactoryBean().getObject() );
	}
	
	// equivalent xml configuration
	/*
	<beans:bean id="transactionManager" class="org.springframework.orm.hibernate3.HibernateTransactionManager.HibernateTransactionManager">
			<beans:property name="sessionFactory" ref="sessionFactoryBean" />
		</beans:bean>	
	*/
}
