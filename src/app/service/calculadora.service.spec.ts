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
});
