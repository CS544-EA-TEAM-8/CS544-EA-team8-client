import { Injectable } from "@angular/core";
import { IRoleMenuItem } from "../types/role-menu-item";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class RoleService {
    constructor(private authService: AuthService) { }
    getRoleMenu(): IRoleMenuItem[] {
        return [
            { label: 'Course', routerLink: '/course' }
        ];
    }
}