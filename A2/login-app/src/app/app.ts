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
  username: string = '';
  password: string = '';
  message: string = '';
  success: boolean = false;

  login() {
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.success = false;
      this.message = 'Please enter Username and Password';
    } else if (this.username === 'admin' && this.password === 'admin123') {
      this.success = true;
      this.message = 'Welcome';
    } else {
      this.success = false;
      this.message = 'Invalid Username or Password';
    }
  }
}
