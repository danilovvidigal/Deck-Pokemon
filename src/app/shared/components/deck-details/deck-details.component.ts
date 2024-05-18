import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from 'src/app/core/service/deck.service';
import { PokemonCard } from 'src/app/core/service/models/pokemon-card.model';
import { Location } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgxPaginationModule
  ],

})
export class DeckDetailsComponent implements OnInit {
  deckName: string | null = '';
  cards: PokemonCard[] = [];
  pokemonCount: number = 0;
  trainerCount: number = 0;
  uniqueTypesCount: number = 0;
  page: number = 1;

  constructor (
    private route: ActivatedRoute,
    private deckService: DeckService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.deckName = this.route.snapshot.paramMap.get('name');
    if (this.deckName) {
      this.deckService.getDeckByName(this.deckName).subscribe(deck => {
        if (deck) {
          this.cards = deck.cards;
          this.calculateCounts();
        }
      });
    }
  }

  calculateCounts(): void {
    const typesSet = new Set<string>();
    this.pokemonCount = this.cards.filter(card => card.supertype === 'Pokémon').length;
    this.trainerCount = this.cards.filter(card => card.supertype === 'Trainer').length;
    this.cards.forEach(card => {
      if (card.types) {
        card.types.forEach(type => typesSet.add(type));
      }
    });
    this.uniqueTypesCount = typesSet.size;
  }

  changePage(page: number): void {
    this.page = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack(): void {
    this.location.back();
  }
}
