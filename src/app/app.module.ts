import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {HttpClientModule} from '@angular/common/http';
import { ReadComponent } from './read/read.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, IndexComponent, CreateComponent, EditComponent, ReadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
