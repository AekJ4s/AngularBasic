import { Component, Input, Output  } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.components.html',
  styleUrls: ['./cross.components.css'],
  standalone: true
})
export class appcrossComponent {
  @Input() data={ IdData: 0, nameData: "Simple Data" };
  constructor() {}

  
}