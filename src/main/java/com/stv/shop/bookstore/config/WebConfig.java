package com.stv.shop.bookstore.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * WebConfig
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Controller
    static class RouteController {
        @RequestMapping(value = "/{[path:[^\\.]*}")
        public String redirect() {
            return "forward:/";
        }
    }
}