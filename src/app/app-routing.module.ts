import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsListComponent } from './cards-list/cards-list.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path:"", component : CardsListComponent },
  { path:"sign-in", component : SignInComponent },
  { path:"sign-up", component : SignUpComponent },
  { path:"**", component : NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
