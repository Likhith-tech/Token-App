package com.akirolabs.validator.service.impl;

import org.springframework.stereotype.Service;

import com.akirolabs.validator.service.TokenValidationService;
import com.akirolabs.validator.util.CommonResponse;

@Service
public class TokenValidationServiceImpl implements TokenValidationService {

	@Override
	public CommonResponse valiadateToken(String token) {
		String sanitizedToken = token.replace("-", "");
		int sum = 0;
		boolean alternate = false;

		for (int i = sanitizedToken.length() - 1; i >= 0; i--) {
			int digit = Character.getNumericValue(sanitizedToken.charAt(i));

			if (alternate) {
				digit *= 2;
				if (digit > 9) {
					digit -= 9;
				}
			}

			sum += digit;
			alternate = !alternate;
		}

		return new CommonResponse("Token Verified Result", sum % 10 == 0);
	}

}
