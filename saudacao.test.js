const saudacao = require('./saudacao')

describe('Testes para saudacao', () => {
    test('Deverá retornar Olá, Maria', () => {
        const olaMaria = saudacao.disOla('Maria')
        expect(olaMaria).toBe('Olá, Maria')
        expect(true).toBeTruthy();
        expect([1,2,3,4,5]).toHaveLength(5)
    })
})