const calc = require('./calculadora')

describe('Teste para a calculadora', () => {
    test('Somar 2 e  2 deve retornar 4', () => { 
        const minhaSoma = calc.soma(2,2)
    
        expect(minhaSoma).toBe(4)
     })
    
     test('Multiplicar 3 com 3 deve resultar em 9', () => {
        const minhaMultiplicacao = calc.multiplicacao(3,3)
    
        expect(minhaMultiplicacao).toBe(9)
     })

     test('Multiplicar 3 com 3 deve ser maior que 6', () => {
        const minhaMultiplicacao = calc.multiplicacao(3,3)
    
        expect(minhaMultiplicacao).toBeGreaterThan(7)
     })
})
