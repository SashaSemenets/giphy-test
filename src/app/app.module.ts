import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GifsRowComponent } from './gifs/gifs-row/gifs-row.component';
import { GifComponent } from './gifs/gif/gif.component';
import { GifContentShimmerComponent } from './gifs/gif-content-shimmer/gif-content-shimmer.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './shared/api.service';

@NgModule({
  declarations: [
    AppComponent,
    GifsRowComponent,
    GifComponent,
    GifContentShimmerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
