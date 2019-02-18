import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SuiModule, SuiRatingModule } from 'ng2-semantic-ui';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';
import { PdfComponent } from './pdf/pdf.component';
import { ResultComponent } from './result/result.component';

import { HttpClientModule } from "@angular/common/http";
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ViewPdfComponent,
    PdfComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule, 
    SuiRatingModule,
    PdfViewerModule,
    FormsModule,
    ApolloModule, 
    HttpLinkModule,
    HttpClientModule 
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "http://localhost:8080/graphql",
          withCredentials: true,
          method: 'POST',
        })
      }
    }, 
    deps: [HttpLink], 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }