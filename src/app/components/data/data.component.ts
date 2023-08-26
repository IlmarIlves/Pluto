import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';

// <div *ngFor="let data of data.data.category.frontPage[0].data[0] | keyvalue">
// {{ data.key }}: {{ data.value }}
// </div>

// <div *ngFor="let frontPage of data?.data?.category?.frontPage">
// <div *ngFor="let dataItem of frontPage.data">
//   <div *ngFor="let photo of dataItem.photos">
//     Photo URL: {{ photo.photoUrlBase }}
//   </div>
// </div>
// </div>
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent implements OnInit {
  data: any | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      },
    );
  }
}
