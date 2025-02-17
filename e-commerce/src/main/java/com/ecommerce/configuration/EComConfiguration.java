package com.ecommerce.configuration;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.PropertiesPropertySource;

import java.util.Properties;

@Configuration
public class EComConfiguration {

    @Bean
    public PropertiesPropertySource dotenvPropertySource() {
        Dotenv dotenv = Dotenv.load(); // Load the .env file

        Properties properties = new Properties();
        dotenv.entries().forEach(entry -> properties.setProperty(entry.getKey(), entry.getValue()));

        return new PropertiesPropertySource("dotenvProperties", properties);
    }
}
