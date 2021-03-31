import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'btree';

  constructor(private router: Router) {}

  Listar() {
    this.router.navigate(['listar']);
  }
  Nuevo() {
    this.router.navigate(['add']);
  }
  Edit() {
    this.router.navigate(['edit']);
  }
}
