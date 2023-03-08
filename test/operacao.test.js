const { describe, expect, it } = require('@jest/globals')
const calculadora = require('../src/operacoes')
describe('Teste da calculadora', () => {
    it('Operação de soma', () => {
        let resultado = calculadora.sum(1, 2);
        expect(resultado).toEqual(3)

    resultado = calculadora.sum(-1, 2);
    expect(resultado).toEqual(1)

    resultado = calculadora.sum(5, 2);
    expect(resultado).toEqual(7)

    resultado = calculadora.sum(4, 2);
    expect(resultado).toEqual(6)
})
it('Operação de Subtração', () => {
    let resultado = calculadora.subtracao(3, 2);
    expect(resultado).toEqual(1)

    resultado = calculadora.subtracao(10, 2);
    expect(resultado).toEqual(8)

    resultado = calculadora.subtracao(32, 2);
    expect(resultado).toEqual(30)

    resultado = calculadora.subtracao(15, 2);
    expect(resultado).toEqual(13)

    resultado = calculadora.subtracao(100, 2);
    expect(resultado).toEqual(98)
})
it('Operação de Multiplicação', () => {
    let resultado = calculadora.multiplicacao(10, 2);
    expect(resultado).toEqual(20)

    resultado = calculadora.multiplicacao(50, 2);
    expect(resultado).toEqual(100)

    resultado = calculadora.multiplicacao(40, 2);
    expect(resultado).toEqual(80)

    resultado = calculadora.multiplicacao(15, 2);
    expect(resultado).toEqual(30)
    resultado = calculadora.multiplicacao(60, 2);
    expect(resultado).toEqual(120)

    resultado = calculadora.multiplicacao(7, 2);
    expect(resultado).toEqual(14)

    resultado = calculadora.multiplicacao(20, 2);
    expect(resultado).toEqual(40)

    resultado = calculadora.multiplicacao(90, 2);
    expect(resultado).toEqual(180)
})
it('Operação de Divisão', () => {
    let resultado = calculadora.divisao(10, 2);
    expect(resultado).toEqual(5)

    resultado = calculadora.divisao(6, 3);
    expect(resultado).toEqual(2)

    resultado = calculadora.divisao(40, 2);
    expect(resultado).toEqual(20)

    resultado = calculadora.divisao(100, 2);
    expect(resultado).toEqual(50)

    resultado = calculadora.divisao(120, 3);
    expect(resultado).toEqual(40)

    resultado = calculadora.divisao(50, 2);
    expect(resultado).toEqual(25)

    resultado = calculadora.divisao(160, 2);
    expect(resultado).toEqual(80)

    resultado = calculadora.divisao(14, 2);
    expect(resultado).toEqual(7)

    resultado = calculadora.divisao(200, 2);
    expect(resultado).toEqual(100)
})
it('Operação de Raiz', () => {
    let resultado = calculadora.raiz(25);
    expect(resultado).toEqual(5)
    resultado = calculadora.raiz(9);
    expect(resultado).toEqual(3)

    resultado = calculadora.raiz(64);
    expect(resultado).toEqual(8)

    resultado = calculadora.raiz(81);
    expect(resultado).toEqual(9)
})
it('Operação de Potência', () => {
    let resultado = calculadora.potencia(80, 2);
    expect(resultado).toEqual(6400)

    resultado = calculadora.potencia(2, 3);
    expect(resultado).toEqual(8)

    resultado = calculadora.potencia(2, 2);
    expect(resultado).toEqual(4)

    resultado = calculadora.potencia(2, 5);
    expect(resultado).toEqual(32)

    resultado = calculadora.potencia(10, 2);
    expect(resultado).toEqual(100)

    resultado = calculadora.potencia(8, 3);
    expect(resultado).toEqual(512)

    resultado = calculadora.potencia(4, 2);
    expect(resultado).toEqual(16)


    resultado = calculadora.potencia(3, 4);
    expect(resultado).toEqual(81)
    resultado = calculadora.potencia(7, 4);
    expect(resultado).toEqual(2401)
})

})

