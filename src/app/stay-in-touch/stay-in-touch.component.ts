import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-stay-in-touch',
  templateUrl: './stay-in-touch.component.html',
  styleUrl: './stay-in-touch.component.scss'
})
export class StayInTouchComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  message: string = '';
messageType: 'success' | 'error' | '' = '';

onSubmit(): void {
  if (this.contactForm.valid) {
    const serviceID = 'service_fux8f6t';
    const templateID = 'template_vs87kqr';
    const userID = 'HopAu3ctR1DKDrAVf';

    emailjs.send(serviceID, templateID, this.contactForm.value, userID)
      .then(() => {
        this.message = 'Message sent successfully!';
        this.messageType = 'success';
        this.contactForm.reset();

        setTimeout(() => {
          this.message = '';
          this.messageType = '';
        }, 4000);
      }, (err) => {
        this.message = 'Failed to send message. Please try again.';
        this.messageType = 'error';
        console.error(err);
      });
  }
}

}
