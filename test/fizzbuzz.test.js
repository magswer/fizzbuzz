const fizzbuzz = require('../src/fizzbuzz')
describe ('function fizzbuzz', () => {
    it ('function is declared', () => {
        expect (typeof fizzbuzz).toBe ('function')
    });

    it ('function returns fizz if number is multiple 3', () => {
        expect(fizzbuzz(3)).toBe ('fizz');
        expect(fizzbuzz(6)).toBe ('fizz');
    });
    
    it ('function returns buzz if number is multiple of 5', () => {
        expect(fizzbuzz(5)).toBe ('buzz')
    });
    
    it('function returns fizzbuzz if number is multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe ('fizzbuzz')
});

it('function returns number if number is NOT multiple of 3 and 5', () => {
    expect(fizzbuzz(16)).toBe (16)
});
            
});