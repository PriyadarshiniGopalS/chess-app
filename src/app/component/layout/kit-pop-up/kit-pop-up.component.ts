import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-pop-up',
  templateUrl: './kit-pop-up.component.html',
  styleUrls: ['./kit-pop-up.component.css']
})
export class KitPopUpComponent {
  kitType: 'none' | 'standard' | 'elite' = 'none';
  setKitType(type: 'standard' | 'elite') {
    this.kitType = type;
  }
}
