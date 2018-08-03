import { Component, ViewChild } from '@angular/core';
import { ViewChildPropertyComponent } from './view-child-property/view-child-property.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';

  @ViewChild('meuFilho') meuFilho;

  escutarEvento(evento) {
    console.log(evento)
  }

  ngOnInit() {
    if(this.meuFilho) {
      setTimeout(() => {
        this.meuFilho.incrementa();
      }, 500);
      
    }
  }

}
