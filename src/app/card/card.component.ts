import { Component, OnInit,Input } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardItems : Item = {
    id: 0,
    title: "",
    image: "",
    keywords: [],
    creator: [],
    description: "",
    full_description: "",
    pubDate: "",
    image_url: "",
    country: [],
    category: [],
    language: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
