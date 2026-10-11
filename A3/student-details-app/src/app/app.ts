import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  students = [
    { rollNo: 1, name: 'Aarav Patil', course: 'M.Sc. Computer Science', city: 'Pune' },
    { rollNo: 2, name: 'Sneha Joshi', course: 'M.Sc. Computer Science', city: 'Nashik' },
    { rollNo: 3, name: 'Rohan Shinde', course: 'M.Sc. Computer Science', city: 'Mumbai' },
    { rollNo: 4, name: 'Priya Pawar', course: 'M.Sc. Computer Science', city: 'Pune' },
    { rollNo: 5, name: 'Aditya Kulkarni', course: 'M.Sc. Computer Science', city: 'Satara' },
    { rollNo: 6, name: 'Neha Deshmukh', course: 'M.Sc. Computer Science', city: 'Nashik' },
    { rollNo: 7, name: 'Om Jadhav', course: 'M.Sc. Computer Science', city: 'Pune' },
    { rollNo: 8, name: 'Isha More', course: 'M.Sc. Computer Science', city: 'Kolhapur' },
    { rollNo: 9, name: 'Sahil Pawar', course: 'M.Sc. Computer Science', city: 'Mumbai' },
    { rollNo: 10, name: 'Kavya Chavan', course: 'M.Sc. Computer Science', city: 'Pune' }
  ];
}
