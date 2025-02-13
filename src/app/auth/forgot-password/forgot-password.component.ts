import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: string = '';
  message: string = '';

  resetPassword() {
    if (!this.email) {
      this.message = 'Please enter your email.';
      return;
    }

    this.message = `A password reset link has been sent to ${this.email}.`;
  }
}
