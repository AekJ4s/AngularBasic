import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import Book from "../../models/book.model";
import { BookService } from "../../services/book.service";
import { BookUpdateComponent } from "../bookupdate/bookupdate.components";
@Component({
    selector: 'booklist-component',
    standalone: true,
    templateUrl: './booklist.components.html',
    styleUrl: './booklist.components.css',
    imports: [CommonModule,RouterModule,RouterOutlet]
})

export class BookListComponent {
    AllBook : Book[] = []

    constructor(private bookService: BookService) { }
    ngOnInit() {
        this.bookService.getAll().subscribe(
            (result) => {
                this.AllBook = result
            },
            (error)=> {
                console.error(error);
            }
        );
    }
}