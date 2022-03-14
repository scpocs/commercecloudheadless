import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';

import { SidebarModule } from 'primeng/sidebar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentComponent } from './document/document.component';

import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TabMenuModule } from 'primeng/tabmenu';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    SidebarModule,
    BrowserAnimationsModule,

    MenuModule,
    MenubarModule,
    TabMenuModule,
    LeafletModule,

    MenubarModule,
    SharedModule,
    ToastModule,
  ],
  providers: [MessageService, { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
