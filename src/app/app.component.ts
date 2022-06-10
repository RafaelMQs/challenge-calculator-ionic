import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {}

  onToggleColorTheme(event : any){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark')
    }else[
      document.body.setAttribute('color-theme', 'ligth')
    ]
  }
}
