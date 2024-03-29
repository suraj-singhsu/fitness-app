import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { Drivers, Storage } from '@ionic/storage';
// import { IonicStorageModule } from "@ionic/storage-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { HeadingComponent } from './components/heading/heading.component';
import { ComponentsModule } from './components/components.module';
@NgModule({
  declarations: [
    AppComponent,
    // HeadingComponent,
  ],
  entryComponents : [
    // HeadingComponent
  ],
  exports: [
    // HeadingComponent,
  ],
  imports: [
    // IonicStorageModule.forRoot({
    //   name: '__mydb',
    //   driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    // }),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
