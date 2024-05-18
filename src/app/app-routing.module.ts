import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewDeckComponent } from './shared/components/new-deck/new-deck.component';
import { DeckListComponent } from './shared/components/deck-list/deck-list.component';
import { DeckDetailsComponent } from './shared/components/deck-details/deck-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-deck', component: NewDeckComponent },
  { path: 'deck-list', component: DeckListComponent },
  { path: 'deck-details/:name', component: DeckDetailsComponent },
  { path: 'edit-deck/:name', component: NewDeckComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
