import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-basics';
  toggle = true;
  cards: Card[] = [
    { title: 'Card 1', text: 'This is card number 1' },
    { title: 'Second card', text: 'This is card number 2' },
    { title: 'Last card!', text: 'This is card number 3' },
  ];
  toggleCards() {
    this.toggle = !this.toggle;
  }
}
