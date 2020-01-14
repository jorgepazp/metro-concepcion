import { Component, OnInit } from '@angular/core';
import { OpinionService } from '../opinion.service';
import { Opinion } from '../opinion';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent{
  datos;
  constructor(private opinionService: OpinionService,
              private opinion: Opinion,
              private toastr: ToastrService) {
    this.datos = ["Concepción","Talcahuano","Hualpén","Chiguayante"
    ,"San Pedro de la Paz","Lota","Penco","Santa Juana","Tomé",
    "Florida","Hualqui","Coronel","Otra"]; 
    
  }
  //rut:string;
  //email:string;
  comuna:string;
  sexo:string;
  comentario:string;
  opinionNum: number; //1 buena - 2 regular - 3 innecesario
  

  showSuccess() {
    this.toastr.success('Tu opinión ha sido guardada', '¡Gracias!');
  }

  showFail() {
    this.toastr.error('Por favor, rellena los campos', 'Ups!');
  }

  submit(){
    //  this.opinion.rut=this.rut;

    if (typeof this.sexo === "undefined" ||
        typeof this.opinionNum === "undefined"||
        typeof this.comuna === "undefined" ) {
      this.showFail();
      return false;
  }else{
    
    if(typeof this.comentario==="undefined" ){
      this.opinion.comentario="";
    }else this.opinion.comentario=this.comentario;
      this.opinion.sexo=this.sexo;
      this.opinion.opinion=this.opinionNum;
      this.opinion.comuna=this.comuna;
      this.opinionService.insertOpinion(this.opinion);
     this.showSuccess();
     var element = <HTMLInputElement> document.getElementById("submit");
    element.disabled = true;
       return false;
      }
  }

  cambioOpinion(voto){
    this.opinionNum = voto;
  }

  cambioSexo(gender){
    this.sexo = gender;
  }

}
