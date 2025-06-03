import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; // Adjust the path as necessary

@Injectable({ providedIn: 'root' })
export class BlizzardService {
  constructor(private http: HttpClient) {}

  getToken() {
    return this.http.get<{ access_token: string }>(
      `${environment.apiUrl}/blizzard-token`
    );
  }
}
