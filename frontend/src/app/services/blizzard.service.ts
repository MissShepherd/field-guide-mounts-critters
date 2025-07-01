import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; // passe ggf. Pfad an

@Injectable({ providedIn: 'root' })
export class BlizzardService {
  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    // Fallback, falls `environment.apiUrl` nicht vorhanden ist
    this.apiUrl = environment.apiUrl ?? (environment as any)['apiUrl'];
  }

  getToken() {
    return this.http.get<{ access_token: string }>(
      `${this.apiUrl}/blizzard-token`
    );
  }
}
