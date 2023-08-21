package com.akirolabs.generator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.akirolabs.generator.service.TokenGenerationService;
import com.akirolabs.generator.util.CommonResponse;

@RestController
@RequestMapping("/generator")
public class TokenGenerationController {
	
	@Autowired
	private TokenGenerationService tokenGenerationService;
	
	@GetMapping("/token")
	public CommonResponse generateTokenAPI(@RequestParam String avaliableDigits) {
		return tokenGenerationService.generateToken(avaliableDigits);
	}
	
}
