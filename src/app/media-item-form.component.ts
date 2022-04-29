import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators, Form, FormBuilder } from "@angular/forms";
import { MediaItemService } from "./media-item.service";
import { lookupListToken } from "./Providers";

@Component({
  selector: "mw-media-item-form",
  templateUrl: "./media-item-form.component.html",
  styleUrls: ["./media-item-form.component.css"],
})
export class MediaItemFormComponent implements OnInit {
  constructor(private formbuilder : FormBuilder, private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupList){}
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      medium: this.formbuilder.control("Movies"),
      category: this.formbuilder.control("Action"),
      year: this.formbuilder.control("", this.yearValidator),
      name: this.formbuilder.control(
        "Steven",
        Validators.compose([
          Validators.required,
          Validators.pattern("[\\w\\-\\s\\/]+"),
        ])
      ),
    });
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value, 10);
    let minyear = 1900;
    let maxyear = 2100;
    if (year >= minyear && year <= maxyear) {
      return null;
    } else {return { minYear: minyear, maxYear: maxyear };}
  }

  onSubmit(formValue) {
    this.mediaItemService.add(formValue);
    console.log(formValue);
  }
}
