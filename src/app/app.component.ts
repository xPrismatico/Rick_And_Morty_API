import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

// MODIFICAMOS DE AQUI EN ADELANTE

@Injectable({
  providedIn: 'root'
})

// Exportamos la clase para obtener datos de la API
export class CharacterService {
  private baseUrl= 'https://rickandmortyapi.com/api';

  // Metodo para obtener los datos de la API con HTTP
  constructor(private http: HttpClient) { }


  // Llamado HTTP a la url concatenando baseUrl con /character
  // retorna Observable de tipo CharacterData
  // CharacterData, prácticamente lo defino en la Interface como es
  getCharacter() : Observable<CharacterData>{
    return this.http.get<CharacterData>(`${this.baseUrl}/character`);
  }
}

// HASTA AQUI LA MODIFICACION
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// MODIFICAMOS EL APP COMPONENT QUE ES EL COMPONENTE PRINCIPAL
// Implementamos OnInit
export class AppComponent implements OnInit{
  
  constructor(
    private flowbiteService: FlowbiteService,
    private characterService: CharacterService
  ) {}


  //Inyecto el servicio de pokemons




  // Una vez se inicia el componente, hare algo con el serivcio


  // Lo vamos a consumir, y vamos a hacer algo con el resultado
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(() => {});


    this.characterService.getCharacter().subscribe({


      //Si esta todo ok, en el next recibo objeto de tipo PokemonData
      //Entonces puedoa cceder a los atributos que defini
      // count next previous results
      // accedo a results, que es un arreglo que puedo acceder a su posicion
      // ahora en ese objeto puedo acceder al nombre


      //Pasamos de la API a consumir el Objeto e interactuar con él
      next: (characters) =>{
        console.log(characters.results[0].name)
      },
      error: (error) =>{
        console.log("Error")
      }
    });
  }
}



import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FlowbiteService } from './services/flowbite.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration()]
};



