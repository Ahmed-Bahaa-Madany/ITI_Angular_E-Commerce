import { Component, OnInit } from '@angular/core';
import cardsList from '../../assets/data.json'
import { Item } from '../interfaces/item';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  cardList: Item[] = cardsList
  constructor() {}

  ngOnInit(): void {}
}
