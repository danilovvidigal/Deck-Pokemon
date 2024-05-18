import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeckService } from 'src/app/core/service/deck.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],

})
export class DeckListComponent {
  decks: any[] = [];
  
  constructor (
    private deckService: DeckService,
    private router: Router,
    private location: Location 
  ) {}

  ngOnInit(): void {
    this.loadDecks();
  }

  loadDecks(): void {
    this.deckService.getDecks().subscribe(decks => {
      this.decks = decks.map(deck => ({
        ...deck,
        image: deck.cards[0]?.images?.small || 'default-image-url'
      }));
    });
  }

  deleteDeck(deckName: string): void {
    this.deckService.deleteDeck(deckName);
    this.loadDecks();
  }

  viewDeck(deckName: string): void {
    this.router.navigate(['/deck-details', deckName]);
  }

  editDeck(deckName: string): void {
    this.router.navigate(['/edit-deck', deckName]);
  }

  createNewDeck(): void {
    this.router.navigate(['/new-deck']); 
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  goBack(): void {
    this.location.back();
  }
}
