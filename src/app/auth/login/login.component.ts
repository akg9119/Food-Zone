import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(users => {
        if (users.length > 0) {
          alert('Login Successful!');
          localStorage.setItem('user', JSON.stringify(users[0]));
          this.router.navigate(['/menu']);
        } else {
          this.errorMessage = 'Invalid Email or Password';
        }
      });
    }
  }
  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

}
