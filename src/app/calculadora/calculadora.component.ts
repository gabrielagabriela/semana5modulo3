import { Component } from '@angular/core';
import { CalculadoraService } from '../service/calculadora.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  num1!: number;
  num2: number = 0;
  result: number = 0;
  num3 = null;

  constructor(private calculadoraService: CalculadoraService){}

  somarValores(){
    this.result = this.calculadoraService.somar(this.num1, this.num2);
  }

  dividirValores(){
    this.result = this.calculadoraService.dividir(this.num1, this.num2);
  }

  subtrairValores(){
    this.result = this.calculadoraService.subtrair(this.num1, this.num2);
  }

  multiplicarValores(){
    this.result = this.calculadoraService.multiplicar(this.num1, this.num2);
  }
}
