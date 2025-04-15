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

  onSubmit(): void {
    if (this.contactForm.valid) {
      const serviceID = 'service_fux8f6t';
      const templateID = 'template_vs87kqr';
      const userID = 'HopAu3ctR1DKDrAVf';

      emailjs.send(serviceID, templateID, this.contactForm.value, userID)
        .then(() => {
          alert('Message sent successfully!');
          this.contactForm.reset();
        }, (err) => {
          alert('Failed to send message. Please try again.');
          console.error(err);
        });
    }
  }
}
