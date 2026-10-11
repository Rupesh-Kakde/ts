import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  num1: number | null = null;
  num2: number | null = null;
  result: number = 0;
  show: boolean = false;

  add() {
    this.result = Number(this.num1) + Number(this.num2);
    this.show = true;
  }
}
