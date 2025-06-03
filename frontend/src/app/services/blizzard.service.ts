import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; // Adjust the path as necessary

@Injectable({ providedIn: 'root' })
export class BlizzardService {
  constructor(private http: HttpClient) {}

  getToken() {
    // Fix: Use environment['apiUrl'] if environment.apiUrl is undefined due to import issues
    const apiUrl = environment.apiUrl || environment['apiUrl'];
    return this.http.get<{ access_token: string }>(
      `${apiUrl}/blizzard-token`
    );
  }
}
