import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Book from "../models/book.model";

@Injectable({
    providedIn: 'root',
})
export class BookService {
    constructor(private http: HttpClient) {}
    
    readonly baseURL = 'http://localhost:3000/books';

    getAll(){
        return this.http.get<Book[]>(`${this.baseURL}`)
    }

    get(id:number|string){
        return this.http.get<Book>(`${this.baseURL}/${id}`)
    }
    
    post(book:Book){
        return this.http.post<Book>(`${this.baseURL}`,book)
    }

    put(book:Book){
        return this.http.put<Book>(`${this.baseURL}`,book)
    }

    delete(id:number|string){
        return this.http.delete<Book>(`${this.baseURL}/${id}`)
    }
}