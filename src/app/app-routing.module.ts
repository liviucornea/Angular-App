import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { TodosComponent } from './shared/todos/todos.component';
import { CoinflipComponent } from './shared/coinflip/coinflip.component';

const routes: Routes = [{
  path: 'home', component: HomeComponent
},
{ path: 'todos', component: TodosComponent },
{ path: 'coinflip', component: CoinflipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
