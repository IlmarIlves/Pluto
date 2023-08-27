import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  data: any | undefined;

  constructor(
    private dataService: DataService,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(
      (response) => {
        this.data = response;

        this.checkButtonVisibility();
      },
      (error) => {
        console.error('Error fetching data:', error);
      },
    );
      // hack fix, forces show some icons on initial render, need to research further
      // icons are shown correctly when refreshed
      setTimeout(() => {
        this.checkButtonVisibility();
      }, 1000);

  }

  public scrollRight(container: HTMLDivElement): void {
    container.scrollTo({
      left: container.scrollLeft + 1300,
      behavior: 'smooth',
    });

    container.addEventListener('scroll', () => {
      this.checkButtonVisibility();
    });
  }

  public scrollLeft(container: HTMLDivElement): void {
    container.scrollTo({
      left: container.scrollLeft - 1300,
      behavior: 'smooth',
    });

    container.addEventListener('scroll', () => {
      this.checkButtonVisibility();
    });
  }

  @HostListener('window:resize')
     onWindowResize(): void {
       this.checkButtonVisibility();
     }
   

  // Function to check button visibility and trigger change detection
  checkButtonVisibility(): void {
    this.cdr.detectChanges();
  }

  shouldShowScrollItem(frontPageData: any): boolean {
    return frontPageData.data.some(
      (headerData: any) => headerData.verticalPhotos.length > 0,
    );
  }
}
