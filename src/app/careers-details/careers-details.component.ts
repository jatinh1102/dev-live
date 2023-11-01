import { Component, OnInit } from '@angular/core';
import { CareersInfoService } from '../Data_Services/careers-info.service';
import { CareersDetailsService } from '../Data_Services/careers-details.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MongodbPostService } from '../Data_Services/mongodb-post.service';
import { WhiteSpace } from '../validation/white-space';
import { ImageValidation } from '../validation/image-validation';

@Component({
  selector: 'app-careers-details',
  templateUrl: './careers-details.component.html',
  styleUrls: ['./careers-details.component.css']
})
export class CareersDetailsComponent implements OnInit {

  career: any;

  constructor(private _service: CareersInfoService,
    private _details: CareersDetailsService,
    private _mongoservice: MongodbPostService,
    public fb: FormBuilder
  ) { }

  careers_info: any[] = [];
  careers_details: any;
  loader:boolean = true;

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.career.get('image')?.setValue(file, { emitModelToViewChange: false });
    }
  }

  career_info() {
    const formData = new FormData();
    formData.append('full_name', this.career.get('full_name').value);
    formData.append('Email', this.career.get('Email').value);
    formData.append('phone_no', this.career.get('phone_no').value);
    formData.append('Current_CTC', this.career.get('Current_CTC').value);
    formData.append('Expected_CTC', this.career.get('Expected_CTC').value);
    formData.append('Employee', this.career.get('Employee').value);
    formData.append('Experience', this.career.get('Experience').value);
    formData.append('message', this.career.get('message').value);
    formData.append('image', this.career.get('image').value);

    this._mongoservice.mongodb_career_info(formData).subscribe(
      response => {
        console.log('Data posted successfully:', response);
      },
      error => {
        console.error('Error posting data:', error);
      }
    )

    this.career.reset();
  }

  ngOnInit(): void {
    this.careers_info = this._service.careers_info;
    console.log(this.careers_info)
    this._details.get_careers_details().subscribe((res) => {
      this.careers_details = res;
    })

    this.career = new FormGroup({
      full_name: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      Email: new FormControl('', [Validators.email, Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      phone_no: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      Current_CTC: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      Expected_CTC: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      Employee: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      Experience: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      message: new FormControl(''),
      image: new FormControl(null, [Validators.required, ImageValidation.fileValidator])
    });

    setTimeout(() => {
      this.loader = false;
    }, 1500);

  }
}

