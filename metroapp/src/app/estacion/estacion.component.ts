import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.component.html',
  styleUrls: ['./estacion.component.css']
})
export class EstacionComponent implements OnInit {

  @Input()
    customTitle: string;
    
  constructor() { }

  ngOnInit() {
  }

}
