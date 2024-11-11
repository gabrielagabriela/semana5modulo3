import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../service/calculadora.service';
import { FormsModule } from '@angular/forms';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let calculadoraService: jasmine.SpyObj<CalculadoraService>;

  beforeEach(() => {
    const calculadoraServiceSpy = jasmine.createSpyObj('CalculadoraService', ['somar']);
    
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      imports: [FormsModule],  
      providers: [
        { provide: CalculadoraService, useValue: calculadoraServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    calculadoraService = TestBed.inject(CalculadoraService) as jasmine.SpyObj<CalculadoraService>;
  });

  it('deve atualizar as variáveis num1 e num2 ao alterar os campos de entrada', () => {
    const inputNum1 = fixture.nativeElement.querySelector('input[placeholder="Número 1"]');
    const inputNum2 = fixture.nativeElement.querySelector('input[placeholder="Número 2"]');
    inputNum1.value = 10;
    inputNum1.dispatchEvent(new Event('input'));
    inputNum2.value = 5;
    inputNum2.dispatchEvent(new Event('input'));
    expect(component.num1).toBe(10);
    expect(component.num2).toBe(5);
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
