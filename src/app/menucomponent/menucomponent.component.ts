import { Component , Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menucomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menucomponent.component.html',
  styleUrl: './menucomponent.component.css'
})
export class MenucomponentComponent {

  @Input() total!:number;
  @Output() changeTotal: EventEmitter<number> = new EventEmitter();

  addVegPizza(){
    this.total = this.total+40;
    this.changeTotal.emit(this.total); 
   }

   removeVegPizza(){
    this.total = this.total-40;
    this.changeTotal.emit(this.total); 
   }

   addNonVegPizza(){
    this.total = this.total+80;
    this.changeTotal.emit(this.total); 
   }

   removeNonVegPizza(){
    this.total = this.total-80;
    this.changeTotal.emit(this.total); 
   }
    
}
