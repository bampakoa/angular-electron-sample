import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PirateService {

  constructor(private http: HttpClient) { }

  getPirates(): Promise<string[]> {
    return firstValueFrom(this.http.get<string[]>('assets/pirates.json'));
  }

  selectPirate(name: string) {
    alert('You selected: ' + name);
  }

}
