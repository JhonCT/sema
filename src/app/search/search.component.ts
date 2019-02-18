import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  name: String = '';  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {}

  public edited = false;

  show():void {
    this.edited = !this.edited;
    console.log(this.edited);
  }

  buscarNombres(): void {
    this.http.get("http://localhost:8080/buscarNombres/" + this.name).subscribe(data => {
      console.log(data);
      let x = JSON.stringify(data);      
      this.router.navigate(['/result', x]);
    })
  }
}