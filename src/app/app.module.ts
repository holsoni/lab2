import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MathComponent } from './math/math.component';
import { UkrainianComponent } from './ukrainian/ukrainian.component';
import { MaterialsComponent } from './materials/materials.component';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterLink} from "@angular/router";
import { SalaryPipe } from './salary.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTreeModule} from "@angular/material/tree";
import {MatSnackBarModule} from "@angular/material/snack-bar";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavBarComponent,
    FooterComponent,
    MathComponent,
    UkrainianComponent,
    MaterialsComponent,
    BlogComponent,
    HomeComponent,
    NotFoundComponent,
    SalaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
