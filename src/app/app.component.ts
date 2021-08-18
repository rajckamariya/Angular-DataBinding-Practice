import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isBtnDisabled = 'true';
  userName = '';
  clear() {
    this.userName = '';
  }
}
