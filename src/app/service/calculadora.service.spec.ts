import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('deve retornar o resultado correto ao subtrair dois números', () => {
    const resultado = service.subtrair(10, 5);
    expect(resultado).toBe(5);
  });

  it('deve retornar o resultado correto ao multiplicar dois números', () => {
    const resultado = service.multiplicar(4, 5);
    expect(resultado).toBe(20);
  });

  it('deve retornar o resultado correto ao dividir dois números', () => {
    const resultado = service.dividir(10, 2);
    expect(resultado).toBe(5);
  });

  it('deve lançar um erro ao tentar dividir por zero', () => {
    expect(() => service.dividir(10, 0)).toThrowError('Não é permitida a divisão por zero');
  });
});
