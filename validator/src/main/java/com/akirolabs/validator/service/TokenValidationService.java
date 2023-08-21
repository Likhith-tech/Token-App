package com.akirolabs.validator.service;

import com.akirolabs.validator.util.CommonResponse;

public interface TokenValidationService {
	
	public CommonResponse valiadateToken(String token);

}
