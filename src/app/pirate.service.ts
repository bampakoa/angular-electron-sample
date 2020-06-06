import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PirateService {

  constructor(private http: HttpClient) { }

  getPirates(): Promise<string[]> {
    return this.http.get<string[]>('assets/pirates.json').toPromise();
  }

}
