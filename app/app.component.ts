import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';
  isShow=true;
  showHideNav(event){
        this.isShow= !(event instanceof LoginComponent);                                        
                               
  } 
}
