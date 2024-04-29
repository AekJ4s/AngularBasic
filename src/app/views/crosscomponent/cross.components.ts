import { Component, Input, Output ,   } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.components.html',
  styleUrls: ['./cross.components.css'],
  standalone: true,
  imports: [FormsModule]
})
export class appcrossComponent {
  @Input() data={ IdData: 0, nameData: "Simple Data" };
  constructor() {}

  
}