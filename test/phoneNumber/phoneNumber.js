const assert = require('chai').assert;
const createPhoneNumber = require('../../src/phoneNumber/phoneNumber.js');

suite('Testing phone number creation', () => {
    test('Correct format 1', () => {
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });

    test('Correct format 2', () => {
        assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    });
});