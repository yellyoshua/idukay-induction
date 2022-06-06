import { expect, describe, it } from '@jest/globals';
import { isUserCodeValid } from './userCode.controller';

describe('UserCodeController', () => {
	it('should return false if code is not valid', () => {
			expect(isUserCodeValid('123456789012345')).toBe(false);
			expect(isUserCodeValid('!@#$%^&_+|[]./=-')).toBe(false);
	});

	it('should return true if code is valid', () => {
		expect(isUserCodeValid('d3v7l7v6h8w/')).toBe(true);
		expect(isUserCodeValid('e3y4l0k2o1j$')).toBe(true);
		expect(isUserCodeValid('h3j4w5z0q7o=')).toBe(true);
	});
});