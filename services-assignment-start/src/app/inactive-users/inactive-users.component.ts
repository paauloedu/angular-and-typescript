import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    // Estamos dando um fetch para que sempre que for criar o component InactiveUsers, pegar os usuarios inativos.
    // Isso é feito a partir do constructor que importa o userService e o ngOnit faz sempre essa inicialização.
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
