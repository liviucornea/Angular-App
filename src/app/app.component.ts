import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, USERS_LIST } from './shared/home/home.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alex';
  message = 'app will run';
  constructor(public router: Router) { }

  public navigateByUrl(url: string) {
    console.log('method navigate is invoked with parameter:', url);
    this.router.navigateByUrl(url);
  }

  public userList: IUser[] = USERS_LIST
}
