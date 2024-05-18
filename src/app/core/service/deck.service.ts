import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonCard } from './models/pokemon-card.model';

 interface Deck {
   name: string;
   cards: PokemonCard[];
 }

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  private decks: Deck[] = []; 

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards`);
  }

  searchPokemonCards(name: string): Observable<{ data: PokemonCard[] }> {
    const query = `name:${name}`;
    return this.http.get<{ data: PokemonCard[] }>(`${this.apiUrl}/cards?q=${query}`);
  }

  addDeck(deck: Deck): void {
    this.decks.push(deck);
  }

  getDecks(): Observable<Deck[]> {
    return of(this.decks);
  }

  deleteDeck(deckName: string): void {
    this.decks = this.decks.filter(deck => deck.name !== deckName);
  }

  updateDeck(updatedDeck: Deck): void {
    const index = this.decks.findIndex(deck => deck.name === updatedDeck.name);
    if (index !== -1) {
      this.decks[index] = updatedDeck;
    } else {
      this.addDeck(updatedDeck);
    }
  }

  getDeckByName(deckName: string): Observable<Deck | undefined> {
    const deck = this.decks.find(deck => deck.name === deckName);
    return of(deck);
  }
  
}
