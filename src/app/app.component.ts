import { Component } from '@angular/core';
import { PirateService } from './pirate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-electron-sample';
  pirates: string[];

  constructor(private pirateService: PirateService) {}

  ngOnInit() {
    this.getPirates();
  }

  private async getPirates() {
    this.pirates = await this.pirateService.getPirates();
  }
}
