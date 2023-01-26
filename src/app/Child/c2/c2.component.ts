import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {

@Output() sort:EventEmitter<any> = new EventEmitter();

  constructor(){}
  radiobtnval:any
  radiobtnchanged(event:any){
    this.radiobtnval = event.target.value;
    
    this.sort.emit(this.radiobtnval);
    
  }

  
}
