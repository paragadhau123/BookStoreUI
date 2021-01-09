import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { of } from 'rxjs';
import { AuthserviceService } from "../../authguard/authservice.service";
fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
   beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
      MatSnackBarModule, FlexLayoutModule, RouterTestingModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatIconModule,
      ReactiveFormsModule,
      MatToolbarModule,
      MatInputModule,
      BrowserModule,
      BrowserAnimationsModule,
      MatFormFieldModule
    ],
    providers: [
      {
        provide: AuthserviceService,
        useValue: authServiceStub
      }
    ]
    })
    .compileComponents();
  });
  const authServiceStub: jasmine.SpyObj<AuthserviceService> = jasmine.createSpyObj(
    'authService',
    ['login']
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('when given correct data to form then return form Valid', () => {
    component.email.setValue('adhauparag64@gmail.com');
    component.password.setValue('Parag123#');
    expect(component.email.valid && component.password.valid).toBeTrue();
  });
 
});
// fdescribe('Hello',()=>{
//   it('First test',()=>{
//   console.log('Parag')
//   expect(10).toBe(10);
//   }
  
//   )
//   });