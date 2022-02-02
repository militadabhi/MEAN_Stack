import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [FoodDataService]
})
export class CreateComponent implements OnInit {
  public newFood: Food = {
    _id: '',
    img: '',
    altText: '',
    card_title: '',
    time: '',
    recipe: ''
  };

  constructor(private foodDataService: FoodDataService) { }

  ngOnInit(): void {
  }

  public createNewFood(newFood: Food): void {
    this.foodDataService.createFood(newFood);
  }

}
