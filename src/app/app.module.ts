import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
