import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import Book from "../../models/book.model";
import { BookService } from "../../services/book.service";
import { error } from "console";

@Component({
    selector: 'bookcreate.component',
    standalone: true,
    templateUrl: './bookcreate.components.html',
    styleUrl: './bookcreate.components.css',
    imports: [FormsModule]
})

export class BookCreateComponent{
    book = new Book();
    constructor(private bookService: BookService){ }

    onSubmit(){
        this.bookService.post(this.book).subscribe(
            (result) => {
                window.location.reload();
            },
            (error) => {
                console.error(error);
            }
        );
    }
}