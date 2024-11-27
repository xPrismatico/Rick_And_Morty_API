import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) { }

  getCharacter(): Observable<CharacterData> {
    return this.http.get<CharacterData>(`${this.baseUrl}/character`);
  }
}
