import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Book from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bookdelete-component',
  standalone: true,
  templateUrl: './bookdelete.components.html',
  styleUrl: './bookdelete.components.css',
  imports: [FormsModule, CommonModule],
})
export class BookDelete {
  book = new Book();
  constructor(private bookService: BookService) {}

  onSubmit() {
    this.bookService.delete(this.book.id).subscribe(
      (result) => {
        this.book = result;
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  nameIsNull() {
    if (this.book.title == '' || this.book.title == null) return false;
    return true;
  }
}
