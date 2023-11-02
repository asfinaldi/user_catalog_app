import { Component , OnInit} from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Response } from 'src/app/model/response.interface';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  response: Response

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUsers(15).subscribe(
      (results: Response) => {
        console.log(results);
        this.response = results;
      }
    )
  }
}
