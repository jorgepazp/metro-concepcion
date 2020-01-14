import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Opinion } from './opinion';


@Injectable()
export class OpinionService {

  constructor(private http: HttpClient) {   }

  insertOpinion(opinion: Opinion){
    this.http.post('https://metro-consulta.firebaseio.com/datos.json', opinion).subscribe(
        response =>{
          console.log("guardado jiji "+ response);
        },
        error => console.log("sdss " + error)
    );
  }
}
