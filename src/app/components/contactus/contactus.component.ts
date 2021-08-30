import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  // registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    console.log("contact us");

   }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   subject: ['', Validators.required],
    //   message: ['', Validators.required],
    // })

    AOS.init();

  }


}


