import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TotalcomponentComponent } from './totalcomponent/totalcomponent.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TotalcomponentComponent, MenucomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ericpizza';

  total= 0;
  changeTotal(t:number){
    this.total = t;
  }
}
