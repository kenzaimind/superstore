import {Component, OnInit, Input} from '@angular/core';
import {FormService} from '../form/form.service';
import {Form} from "../form/form.model";
import {ToastsManager} from "ng2-toastr";


@Component({
  selector: 'app-user-form',
  templateUrl: 'userForms.component.html',
  styleUrls: ['userForms.component.css']
})
export class UserFormComponent implements OnInit {
  fetchedForms = [];

  constructor(private formService: FormService, private toastr: ToastsManager) {
  }

  ngOnInit() {
    this.formService.getUserForms()
      .subscribe(
        (forms) => {
          this.fetchedForms = forms;
        });
  }

  onDelete(formId) {
    this.formService.deleteForm(formId)
      .subscribe();
  }
}
