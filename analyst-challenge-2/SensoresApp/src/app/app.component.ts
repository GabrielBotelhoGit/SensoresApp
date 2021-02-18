import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
    .page-content{
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
  `]
})
export class AppComponent {
  title = 'app';
}
