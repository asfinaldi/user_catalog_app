import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/interface/response.interface';
import { User } from 'src/interface/user.interface';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  response: Response;
  user:User;
  mode: 'edit'|'locked'='locked';
  buttonText: 'Save Changes'| 'Edit' = 'Edit'

  constructor(private activateRoute: ActivatedRoute,private userService: UserService){}
  
  ngOnInit(): void {
    this.user= (<User>(this.activateRoute.snapshot.data['resolvedResponse'].results[0]));
    console.log(this.user);
    // this.activateRoute.paramMap.subscribe((params: ParamMap) =>{
    //   console.log('User ID: ', params.get('uuid')!);
    //   this.userService.getUser(params.get('uuid')!).subscribe(
    //   (response:any) => {
    //     console.log(response);
    //     this.response = response;
    //   }
    //   )
    // })
    
  }

  changeMode(mode?: 'edit' | 'locked'): void {
    console.log(mode);
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.buttonText = this.buttonText === 'Edit' ? 'Save Changes' : 'Edit';
    if(mode === 'edit') {
      // Logic to update the user on the back end
      console.log('Updating using on the back end');
    }
  }



}
