import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DeckListComponent } from '../../shared/components/deck-list/deck-list.component';
import { NewDeckComponent } from '../../shared/components/new-deck/new-deck.component';
import { RouterModule } from '@angular/router';
import { SvgSoonComponent } from 'src/app/shared/components/svg-soon/svg-soon.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    DeckListComponent,
    NewDeckComponent,
    SvgSoonComponent
  ],
})
export class HomeComponent {

  constructor() {}
}
