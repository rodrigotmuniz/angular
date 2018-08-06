import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  getLocale() {
    return 'pt'; //This information should be found in the server.
  }

  constructor() { }
}
