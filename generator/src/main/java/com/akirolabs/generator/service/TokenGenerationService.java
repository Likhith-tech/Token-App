package com.akirolabs.generator.service;

import com.akirolabs.generator.util.CommonResponse;

public interface TokenGenerationService {
		
	public CommonResponse generateToken(String availableDigits);

}
