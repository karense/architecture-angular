import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-zone',
  templateUrl: './form-zone.component.html',
  styleUrls: ['./form-zone.component.css']
})
export class FormZoneComponent implements OnInit {

  @Input() title: string = "";

  id: number = 0;
  name: string = "";
  zoneForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.zoneForm = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onAction(){}
}
