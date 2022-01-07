import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tech-alchemy';

  constructor(public router: Router) {}

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
