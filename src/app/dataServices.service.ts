import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { City } from "./city.model";
import { Community } from "./community.model";
import { Country } from "./country.model";
import { Division } from "./division.model";
import { Position } from "./position.model";

@Injectable()
export class DataServices {
    constructor(private http: HttpClient){}

    savePosition(position: Position[]){
        this.http.put('https://cargos-4a722-default-rtdb.firebaseio.com/data.json', position).subscribe(
            response => console.log(response),
            error => console.log(error)
        )
    }

    saveCommunity(community: Community[]){
        this.http.put('https://comunidades-dbee4-default-rtdb.firebaseio.com/data.json', community).subscribe(
            response => console.log(response),
            error => console.log(error)
        )
    }

    saveDivision(division: Division[]){
        this.http.put('https://divisiones-7baea-default-rtdb.firebaseio.com/data.json', division).subscribe(
            response => console.log(response),
            error => console.log(error)
        )
    }

    loadPositions(){
        return this.http.get<Position[]>('https://cargos-4a722-default-rtdb.firebaseio.com/data.json');
    }

    loadCities(){
        return this.http.get<City[]>('https://www.datos.gov.co/resource/xdk5-pm3f.json');
    }

    loadCountries(){
        return this.http.get<Country[]>('https://restcountries.com/v2/all');
    }

    loadCommunities(){
        return this.http.get<Community[]>('https://comunidades-dbee4-default-rtdb.firebaseio.com/data.json');
    }

    loadDivisions(){
        return this.http.get<Division[]>('https://divisiones-7baea-default-rtdb.firebaseio.com/data.json');
    }
}