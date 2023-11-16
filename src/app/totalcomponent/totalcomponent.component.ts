import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-totalcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './totalcomponent.component.html',
  styleUrl: './totalcomponent.component.css'
})
export class TotalcomponentComponent {

  @Input() total!:number;
  @Output() changeTotal: EventEmitter<number> = new EventEmitter();

  calculateTotal(){
    if(this.total > 500){
      this.total = this.total-10+20;
    }
    else{
      this.total = this.total+20;
    }

    this.changeTotal.emit(this.total);

  }

}
