import { Component } from '@angular/core';

@Component({
  selector: 'page-home-ionic',  
  templateUrl: 'home.html'
})
export class HomeIonicPage {

  userName: String;

  constructor() {
    
  }

  buscarUsuario() {
    console.log(this.userName)
  }
}
