import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../service/calculadora.service';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let calculadoraService: jasmine.SpyObj<CalculadoraService>;

  beforeEach(() => {
    const calculadoraServiceSpy = jasmine.createSpyObj('CalculadoraService', ['somar']);
    
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      providers: [
        { provide: CalculadoraService, useValue: calculadoraServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    calculadoraService = TestBed.inject(CalculadoraService) as jasmine.SpyObj<CalculadoraService>;
  });

  it('deve atualizar o resultado corretamente ao somar dois números', () => {

    calculadoraService.somar.and.returnValue(15);
    component.num1 = 10;
    component.num2 = 5;
    component.somarValores();
    expect(component.result).toBe(15);
    expect(calculadoraService.somar).toHaveBeenCalledWith(10, 5);
  });

});
