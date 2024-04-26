import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class UploadService {
    
    constructor(private http: HttpClient) {}

    readonly baseURL = 'https://ez-upload.al-guide-th.com/api';

    upload(file:File){
        const body = new FormData();
        body.append("file",file);
        return this.http.post(this.baseURL + '/upload', body)
    }

    dowload(file:File){
        return this.baseURL+"/download/"+file.name;
    }

    
}