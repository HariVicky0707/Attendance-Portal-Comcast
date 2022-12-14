import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent {

  constructor (private form:FormBuilder, 
               private service:ServicefilesService, private router: Router){}
    addEmployeeForm= this.form.group({
      firstName:['',[Validators.required]],
      lastName:[''],
      mailID:['',[Validators.required]],
      employeeId:['',[Validators.required]],
      password:['', [Validators.required]],
      confirmPassword:['',[Validators.required]],
      roles: ['user']
    })


    onSubmit(){

      if(this.addEmployeeForm.invalid, this.addEmployeeForm.touched, this.addEmployeeForm.dirty){
          let requestBody={
            firstName: this.addEmployeeForm.get('firstName')?.value,
            lastName: this.addEmployeeForm.get('lastName')?.value,
            mailID: this.addEmployeeForm.get('mailID')?.value,
            employeeId: this.addEmployeeForm.get('employeeId')?.value,
            password: this.addEmployeeForm.get('password')?.value,
            roles:this.addEmployeeForm.get('roles')?.value
          }
          this.service.postEmployee(requestBody).subscribe((result: any)=>{
            console.log(result);
            this.router.navigate(['/home']);
           
          })
        }
    }

}
