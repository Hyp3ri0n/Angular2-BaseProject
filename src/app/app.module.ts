import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/root/app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}