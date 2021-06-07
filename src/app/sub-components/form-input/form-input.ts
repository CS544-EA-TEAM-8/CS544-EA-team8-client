import { Component, Input } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
    selector: 'form-input',
    templateUrl: './form-input.html',
    styleUrls: ['./form-input.scss']
})
export class FormInputComponent {
    constructor(public gd: FormGroupDirective) {
    }
    @Input() label: string;
    @Input() type: string = 'text';
    @Input() field: string;
    @Input() mandatory: boolean;
    @Input() maxlength: number;
}