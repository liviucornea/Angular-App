import { Component, Input } from '@angular/core';
import { UserErrorComponent } from '../user-error/user-error.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() email!: string;
  @Input() salary!: string;
  @Input() dateOfBirth!: string;
}