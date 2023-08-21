package com.akirolabs.validator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akirolabs.validator.service.TokenValidationService;
import com.akirolabs.validator.util.CommonResponse;

@RestController
@RequestMapping("/validator")
public class TokenValidationController {
	
	@Autowired
	private TokenValidationService tokenValidationService;
	
	@PostMapping("/token")
	public CommonResponse validateTOkenApi(@RequestBody String token) {
		return tokenValidationService.valiadateToken(token);
	}
}
