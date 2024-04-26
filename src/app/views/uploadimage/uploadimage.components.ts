import { Component  } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UploadService } from "../../services/upload.service";
@Component({
    selector: 'uploadImage-component',
    standalone : true,
    templateUrl: './uploadimage.components.html',
    styleUrl: './uploadimage.components.css'
})
export class UploadImageComponent{
    image:File|null = null;
    show_url = ""
    image_url = ""


  

    uploading(event:any){
        const file:File = event.target.files[0];
        if(file){
            this.image = file
            this.show_url = URL.createObjectURL(file)
        }
        console.log("ok");
    }
    constructor(private uploadService: UploadService) {}
    sendToServer(){
        if(this.image != null){
            this.uploadService.upload(this.image).subscribe(
                (result) => {
                    if(this.image != null)this.image_url= this.uploadService.dowload(this.image);
                },
                (error)=> {
                    console.log(error);
                }
            )
        }
    }
}


