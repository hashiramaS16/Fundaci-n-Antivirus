import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { user } from './interface/ejemplo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public rol!: string
  private usuario = user

  sendData(){
    let route
    this.rol = this.usuario[0].rol
    console.log(this.rol);
    
    if (this.rol == 'estudiante' ) {
      route = '/user'
    }else{
      route = '/admin'
    }
    return route
  }
  public route = this.sendData()
}
