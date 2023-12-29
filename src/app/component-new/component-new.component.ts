import { outputAst } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-new',
  templateUrl: './component-new.component.html',
  styleUrls: ['./component-new.component.scss'],
})
export class ComponentNewComponent {
  inputValue!: number;
  fibonacciSequence: number[] = [];

  generateFibonacci() {
    if (this.inputValue < 0) {
      alert('Range cannot be less than 0');
      return;
    }
    this.fibonacciSequence = this.calculateFibonacci(this.inputValue);
  }

  calculateFibonacci(range: number): number[] {
    const fibonacciSeq: number[] = [];

    if (range <= 0) {
      return fibonacciSeq;
    }

    let num1 = 0;
    let num2 = 1;

    fibonacciSeq.push(num1);

    while (fibonacciSeq.length < range) {
      fibonacciSeq.push(num2);
      const nextNum = num1 + num2;
      num1 = num2;
      num2 = nextNum;
    }

    return fibonacciSeq;
  }
}
