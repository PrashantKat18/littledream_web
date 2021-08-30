import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatButtonModule,
    FormsModule,
  ]
})
export class ContactusModule { }
