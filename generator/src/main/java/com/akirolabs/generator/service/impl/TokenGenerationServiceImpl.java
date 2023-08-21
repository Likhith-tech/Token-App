package com.akirolabs.generator.service.impl;

import java.security.SecureRandom;

import org.springframework.stereotype.Service;

import com.akirolabs.generator.service.TokenGenerationService;
import com.akirolabs.generator.util.CommonResponse;

@Service
public class TokenGenerationServiceImpl implements TokenGenerationService {
	
	@Override
	public CommonResponse generateToken(String availableDigits) {
		StringBuilder token = new StringBuilder();
		SecureRandom random = new SecureRandom();

		for (int i = 0; i < 4; i++) {
			for (int j = 0; j < 4; j++) {
				int randomIndex = random.nextInt(availableDigits.length());
				token.append(availableDigits.charAt(randomIndex));
			}
			if (i < 3) {
				token.append("-");
			}
		}

		return new CommonResponse("Token Generated Successfully", token.toString());
	}

}
