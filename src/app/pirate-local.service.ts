import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class PirateLocalService {

  constructor(private electronService: ElectronService) { }

  getPirates(): Promise<string[]> {
    return this.electronService.ipcRenderer.invoke('getPirates');
  }

  selectPirate(name: string) {
    this.electronService.ipcRenderer.sendSync('selectPirate', name);
  }
  
}
