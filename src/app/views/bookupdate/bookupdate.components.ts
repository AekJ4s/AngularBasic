import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import Book from "../../models/book.model";
import { BookService } from "../../services/book.service";
import { error } from "console";

@Component({
    selector: 'bookupdate.component',
    standalone: true,
    templateUrl: './bookupdate.components.html',
    styleUrl: './bookupdate.components.css',
    imports: [FormsModule]
})

export class BookUpdateComponent{
    book = new Book();
    constructor(private bookService: BookService){ }

    onSubmit(){
        console.log("This button to update is working")
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