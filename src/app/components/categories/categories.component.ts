import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  data: any | undefined;

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

  public scrollRight(container: HTMLDivElement): void {
    container.scrollTo({
      left: container.scrollLeft + 1300,
      behavior: 'smooth'
    });
  }

  public scrollLeft(container: HTMLDivElement): void {
    container.scrollTo({
      left: container.scrollLeft - 1300,
      behavior: 'smooth'
    });
  }
}