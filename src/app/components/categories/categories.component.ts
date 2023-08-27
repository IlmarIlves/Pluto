import { Component, ElementRef, OnInit, ViewChild, Renderer2, HostListener, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  data: any | undefined;

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef,
    ) {}

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

   showLeftButton(container: HTMLDivElement): boolean {
    return container.scrollLeft > 0;
  }

  showRightButton(container: HTMLDivElement): boolean {
    return container.scrollLeft < (container.scrollWidth - container.clientWidth);
  }

  public scrollRight(container: HTMLDivElement): void {
    container.scrollTo({
      left: container.scrollLeft + 1300,
      behavior: 'smooth'
    });

    container.addEventListener('scroll', () => {
      this.checkButtonVisibility();
    });
  }

  public scrollLeft(container: HTMLDivElement): void {
    container.scrollTo({
      left: container.scrollLeft - 1300,
      behavior: 'smooth'
    });

    container.addEventListener('scroll', () => {
      this.checkButtonVisibility();
    });
  }

    // Function to check button visibility and trigger change detection
    checkButtonVisibility(): void {
      this.cdr.detectChanges();
    }
}