import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  interpolation: ['{{', '}}'],
})
export class CardComponent implements OnInit {
  @Input() card: Card = <Card>{};
  title: string = 'My Card Title';
  text: string = 'My sample text';
  disabled = false;
  imgUrl: string =
    'data:image/png;base64,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';

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl =
        'data:image/png;base64,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';
      this.disabled = true;
    }, 3000);
  }
  getInfo(): string {
    return 'This is my info';
  }
  changeTitle() {
    this.card.title = 'Title has been changed!';
  }
  inputHandler(value: any) {
    // const value = event.target.value;
    this.title = value;
  }
  changeHandler() {
    console.log(this.title);
  }
  //   number = 42;
  //   array = [1, 1, 2, 3, 5, 8, 13];
  //   obj = {
  //     name: 'Tania',
  //     info: {
  //       age: 28,
  //       job: 'none',
  //     },
  //   };
}
