import { Component } from '@angular/core';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-most-watched',
  templateUrl: './most-watched.component.html',
  styleUrls: ['./most-watched.component.scss']
})
export class MostWatchedComponent {
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
