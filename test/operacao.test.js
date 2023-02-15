const { describe, expect, it} = require('@jest/globals')
const calculadora = require ('../src/operacoes')
describe('Teste da calculadora', () => {
    it ('Operação de soma', () =>{
    const resultado = calculadora.sum(1,2);
 expect(resultado).toEqual (3)  })
 
 resultado = calculadora.sum(-1,2);
expect(resultado).toEqual (1)

}) 
resultado = calculadora.sum(-1,2);
expect(resultado).toEqual (1)



