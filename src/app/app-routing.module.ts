import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  //{path: '', component: SearchComponent },
  {path: 'result/:x', component: ResultComponent},
  {path: 'vieweco', component: PdfComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
