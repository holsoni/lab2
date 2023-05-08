import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userForm:any;
  types = ['Тип 1', 'Тип 2','Тип3'];
  users:any[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: undefined,
      name: ["Ім'я", Validators.required],
      lastname: ['Прізвище', Validators.required],
      type: [''],
      email: ['email@gm.com', [Validators.required, Validators.email]],
      password: ['Asd123.', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:"\\|,.<>\\/?]).+$')]],
      confirmPassword: ['Asd123.', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:"\\|,.<>\\/?]).+$')]],
      subjects: this.fb.array([]),
      description: '',
      sex: '',
      phone: ['+380992973339', [Validators.required, Validators.pattern('^[+][0-9]{12}$')]]
    },{
      validator: this.passwordMatchValidator,
    });
  }
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value !== confirmPassword.value ? { passwordMismatch: true } : null;
  }
  get subjects(){
    return this.userForm.get('subjects') as FormArray;
  }

  addSubject() {
    this.subjects.push(this.fb.control(""))
  }

  onSubmit() {
    let user = this.userForm.value;
    user.id= this.getRandomInt(1,1000);
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    // @ts-ignore
    this.users.push(user);
    localStorage.setItem('users',JSON.stringify(this.users));
    console.log(localStorage.getItem('users'));
    this.userForm.reset();
  }

   getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  removeSubject(i: number) {
    this.subjects.removeAt(i);
  }
}
