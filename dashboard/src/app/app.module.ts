import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostsComponent } from './modules/posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ArticlesComponent } from './modules/articles/articles.component';
import { FormsModule } from '@angular/forms';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PendingverificationComponent } from './modules/pendingverification/pendingverification.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PostsComponent,
    LoginComponent,
    PendingverificationComponent,
    DialogBoxComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    NgbModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    HttpClientModule



  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
