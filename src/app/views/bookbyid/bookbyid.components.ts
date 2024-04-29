import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import Book from "../../models/book.model";
import { BookService } from "../../services/book.service";
import { error } from "console";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'bookbyid-component',
    standalone: true, 
    templateUrl: './bookbyid.components.html',
    styleUrl: './bookbyid.components.css',
    imports: [FormsModule,CommonModule]
})
export class BookByIdComponent {
    book = new Book();
    constructor(private bookService: BookService){ }

    onSubmit(){
        this.bookService.get(this.book.id).subscribe(
            (result) => {
                this.book=result
            },
            (error) => {
                console.error(error);
            }
            
        );
    }

    nameIsNull(){
        if(this.book.title ==""||this.book.title==null) return false
        return true
    }
}