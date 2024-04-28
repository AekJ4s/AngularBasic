import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import Book from '../../models/book.model';

@Component({
  selector: 'bookupdate-component',
  standalone: true,
  templateUrl: './bookupdate.components.html',
  styleUrls: ['./bookupdate.components.css'],
})
export class BookUpdateComponent implements OnInit {
  book = new Book();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.book.id = params['id'];
      this.book.title = params['title'];
      this.book.price = params['price'];
    });
  }

  onSubmit() {
    this.bookService.put(this.book).subscribe(
      (result) => {
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
