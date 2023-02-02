import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostCreateUserCase } from 'src/app/domain/usecase/user.usecase';
import { ZoneUseCase } from 'src/app/domain/usecase/zone.usecase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string = ""
  job:string = ""

  constructor(private formBuilder: FormBuilder, private zoneUseCase: ZoneUseCase) {
  }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.name + this.job);
    this.zoneUseCase.getAll().subscribe((res) => {
      console.log(res)
    })
    
  }
}
