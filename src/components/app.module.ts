import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HelloWorldComponent} from './hello-world/hello-world.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesDirectivesComponent } from './pipes-directives/pipes-directives.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { BlueDirective } from './directives/blue.directive';
import { FormsComponent } from './forms/forms.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    BindingComponent,
    PipesDirectivesComponent,
    BlueDirective,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
