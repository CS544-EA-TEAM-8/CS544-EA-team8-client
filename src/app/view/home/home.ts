import { Component } from "@angular/core";
import { RoleService } from "src/app/service/role.service";
import { IRoleMenuItem } from "src/app/types/role-menu-item";

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
  })
  export class HomeComponent {
    menuItems: IRoleMenuItem[];
    constructor(private roleService: RoleService) {
      this.menuItems = roleService.getRoleMenu();
    }
  }