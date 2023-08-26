import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-data',
  template: `
  <div *ngFor="let item of data | keyvalue">
    Key: {{ item.key }}, Value: {{ item.value }}
  </div>
  `,
})
export class DataComponent implements OnInit {
  data: any[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
