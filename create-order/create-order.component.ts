import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit{

  loginForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  })
 

  constructor(private formBuilder: FormBuilder){}
  
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.info("Form Valid!")
  }

  get controls(): { [p: string]: AbstractControl } {
    return this.loginForm.controls;
  }

}
