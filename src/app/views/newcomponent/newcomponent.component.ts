import { Component  } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'newcomponent',
    standalone : true,
    templateUrl: './newcomponent.component.html',
    styleUrl: './newcomponent.component.css'
})
export class NewComponent{
    idText:string | null | undefined 
    array = [1,3,6,8]

    constructor(private route: ActivatedRoute){}

    ngOnInit() {
        this.idText = this.route.snapshot.paramMap.get('id')
        console.log(this.idText)
    }
}
