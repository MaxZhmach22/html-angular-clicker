import {Component, OnInit} from '@angular/core';
import {IApple} from "../iapple";

@Component({
  selector: 'first-comp',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{

  name:string | undefined;
  apple: IApple;
  shops: string[]  = [];


  constructor() {
    this.apple = {
      color: 'asd',
      weight: 1
    }
  }

  ngOnInit(): void {
    this.shops = ["Лента", "Магнит", "Шестёрочка"];
    this.apple.color = 'red';
    this.name = "Какой-то"
  }
}
