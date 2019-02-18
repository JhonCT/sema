import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface eco {
  nombre: string;   
  numeroPagina: number;
  numerosPagina: number;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  
  public enom:string; 
  public page: number;

  ecos: eco[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {    
    let ecoe = JSON.parse(this.route.snapshot.paramMap.get("x"));    

    for (let index = 0; index < ecoe.length; index++) {
      let name = ecoe[index].nombre;      
      this.ecos = [
        {"nombre": name.split(".", 1), "numeroPagina": ecoe[index].numeroPagina, "numerosPagina":0}]
    }    
  } 

  verEco(nombre:string, page:number):void {
    this.enom = nombre;         
    this.page = page;
  }

}