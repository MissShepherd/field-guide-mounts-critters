import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MountService {
  constructor(private http: HttpClient) {}

  getMounts() {
    return this.http.get('http://localhost:3000/api/mounts');
  }
}
