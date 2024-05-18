import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeckService } from 'src/app/core/service/deck.service';
import { PokemonCard } from 'src/app/core/service/models/pokemon-card.model';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-deck',
  templateUrl: './new-deck.component.html',
  styleUrls: ['./new-deck.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class NewDeckComponent implements OnInit {
  deckName: string = '';
  originalDeckName: string = '';
  cards: PokemonCard[] = [];
  searchResults: PokemonCard[] = [];
  cardInput: string = '';
  isEditMode: boolean = false; 

  constructor (
    private deckService: DeckService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.isEditMode = true; 
      this.deckService.getDeckByName(name).subscribe(deck => {
        if (deck) {
          this.deckName = deck.name;
          this.originalDeckName = deck.name; 
          this.cards = deck.cards;
        }
      });
    } else {
      this.isEditMode = false;
      this.deckName = '';
      this.cards = [];
    }
  }

  searchCards() {
    if (this.cardInput) {
      this.deckService.searchPokemonCards(this.cardInput).subscribe(response => {
        this.searchResults = response.data;
      });
    }
  }

  addCard(card: PokemonCard) {
    const count = this.cards.filter(c => c.name === card.name).length;
    if (count < 4 && this.cards.length < 60) {
      this.cards.push(card);
      this.searchResults = this.searchResults.filter(c => c.id !== card.id);
    } else {
      this.toastr.error('Não é permitido mais de 4 cartas com o mesmo nome ou mais de 60 cartas no baralho.');
    }
  }

  saveDeck() {
    if (this.deckName && this.cards.length >= 24 && this.cards.length <= 60) {
      const deck = { name: this.deckName, cards: this.cards };
      if (this.isEditMode) {
        if (this.deckName !== this.originalDeckName) {
          this.deckService.deleteDeck(this.originalDeckName);
        }
        this.deckService.updateDeck(deck);  
      } else {
        this.deckService.addDeck(deck);
      }
      this.toastr.success('Baralho salvo com sucesso!');
      this.router.navigate(['/deck-list']);
    } else {
      this.toastr.error('O baralho deve ter um nome e entre 24 a 60 cartas.');
    }
  }

  removeCard(card: PokemonCard) {
    this.cards = this.cards.filter(c => c.id !== card.id);
  }

  goBack(): void {
    this.location.back();
  }
}
