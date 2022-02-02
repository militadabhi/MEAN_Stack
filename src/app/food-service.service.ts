import { Injectable } from '@angular/core';
import { Food } from './food';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class FoodDataService {
  private foodsUrl = 'http://localhost:3000/api/foods';

  constructor(private http: HttpClient) { }

  public getFoods(): Promise<Food[]> {
    return this.http
      .get(this.foodsUrl)
      .toPromise()
      .then(response => response as Food[]);

  }

  getSingleFood(foodId: String): Promise<Food> {
    return this.http.get(this.foodsUrl + '/' + foodId)
      .toPromise()
      .then(response => response as Food);

  }

  createFood(newFood: Food): Promise<Food> {
    return this.http.post(this.foodsUrl, newFood)
      .toPromise()
      .then(response => response as Food);

  }
  /*
  private handleError(error: any): Promise<any>{
      console.error('Something went wrong', error);
      return Promise.reject(error.message || error);
      }*/

}