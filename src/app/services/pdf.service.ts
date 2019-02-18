import { Injectable, ɵConsole } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }
  
  getPdf(eco:string):string {
      return `/assets/eco/${eco}.pdf`;  
  }
}
