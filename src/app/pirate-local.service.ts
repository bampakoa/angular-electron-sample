import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class PirateLocalService {

  constructor(private electronService: ElectronService) { }

  getPirates(): Promise<string[]> {
    return this.electronService.ipcRenderer.invoke('getPirates');
  }
  
}
