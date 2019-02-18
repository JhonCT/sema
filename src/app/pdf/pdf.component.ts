import { Component, OnInit , Input } from '@angular/core';

import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styles: [],
  providers: [PdfService]
})
export class PdfComponent implements OnInit {
  @Input() ecoNombre: string;
  @Input() ecoPagina: number;  
  
  page: number = 1;   
  pdfSrc: string = '';
  showall: boolean = false;
 
  constructor(private pdfservice: PdfService) { }

  ngOnInit() {
  }
  
  ngOnChanges(){
    this.pdfSrc = this.pdfservice.getPdf(this.ecoNombre);  
  }

  onFileSelected(){
    let img:any = document.querySelector("#file");
    
    if(typeof (FileReader) !== 'undefined'){
      let reader = new FileReader();

      reader.onload = (e:any) => {
        this.pdfSrc = e.target.result;
      }

      reader.readAsArrayBuffer(img.files[0]);
    }

  }

  movePage(numero: number){
    this.page += numero;
  }

  showAll(){
    this.showall = !this.showall;
  }

}
