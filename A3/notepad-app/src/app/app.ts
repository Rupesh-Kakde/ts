import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Note {
  id: number;
  text: string;
  dateTime: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnDestroy {
  noteText: string = '';
  editText: string = '';
  editingId: number | null = null;
  currentTime: string = new Date().toLocaleString();
  notes: Note[] = [];
  private timerId: ReturnType<typeof setInterval>;

  constructor() {
    this.timerId = setInterval(() => {
      this.currentTime = new Date().toLocaleString();
    }, 1000);
  }

  addNote() {
    const text = this.noteText.trim();
    if (text === '') {
      return;
    }
    this.notes.unshift({
      id: Date.now(),
      text,
      dateTime: new Date().toLocaleString()
    });
    this.noteText = '';
  }

  editNote(note: Note) {
    this.editingId = note.id;
    this.editText = note.text;
  }

  updateNote(note: Note) {
    const text = this.editText.trim();
    if (text === '') {
      return;
    }
    note.text = text;
    note.dateTime = new Date().toLocaleString();
    this.editingId = null;
    this.editText = '';
  }

  cancelEdit() {
    this.editingId = null;
    this.editText = '';
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    if (this.editingId === id) {
      this.cancelEdit();
    }
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }
}
