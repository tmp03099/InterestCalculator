import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public value1: number|null = null;

  public value2: number|null = null;

  public value3: number|null = null;

  public value4: number|null = null;

  public value5: number|null = null;

  public value6: number|null = null;
  
  
  initialChange(newValue1:number){

    if((this.value1 != null) && (this.value2 != null) && (this.value3 != null)){
      this.value4 = this.value1 * this.value2/100 * this.value3;
      this.value5 = this.value1 * 1;
      this.value6 = this.value4 + this.value5;
      console.log(typeof this.value4);
      console.log(typeof this.value5);
    }
    
  }

  
}
