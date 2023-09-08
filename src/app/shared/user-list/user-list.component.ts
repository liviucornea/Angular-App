import { Component, Input, OnInit, Output} from '@angular/core';
import { UserComponent } from '../user/user.component';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup } from '@angular/forms';
import { UserErrorComponent } from '../user-error/user-error.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() email!: string;
  @Input() salary!: string;
  @Input() dateOfBirth!: string;

  public userInfo: any

  ngOnInit(): void {
    const P = localStorage.getItem('userInfo');
    if(P) {
      this.userInfo = JSON.parse(P);
    }
  }
}



