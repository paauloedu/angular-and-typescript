import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    // Estamos dando um fetch para que sempre que for criar o component ActiveUsers, pegar os usuarios ativos.
    // Isso é feito a partir do constructor que importa o userService e o ngOnit faz sempre essa inicialização.
    this.users = this.userService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
