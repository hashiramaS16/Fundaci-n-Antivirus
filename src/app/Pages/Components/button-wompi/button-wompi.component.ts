import { Component } from '@angular/core';

@Component({
    selector: 'app-button-wompi',
    standalone:true,
    templateUrl: './button-wompi.component.html',
    styleUrls: ['./button-wompi.component.css']
})
export class ButtonWompiComponent {
    handleClick() {
      console.log('Wompi Button clicked');
    }
  
}
