import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee'; // fetch data

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
