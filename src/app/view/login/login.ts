import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { fold } from "src/app/types/animation";

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss'],
    animations: [fold]
})
export class LoginComponent {
    fg: FormGroup;
    error: string;
    busy: boolean;
    constructor(builder: FormBuilder, private authService: AuthService) {
        this.fg = builder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    onSubmit() {
        if (!this.fg.valid) { return; }
        this.authService.login(this.fg.get('username').value, this.fg.get('password').value).subscribe(
            r => {
                this.busy = false;
                this.fg.reset();
            },
            err => {
                this.error = err;
                this.busy = false;
            }
        );
    }
}