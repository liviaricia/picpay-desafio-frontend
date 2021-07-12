import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NgxSpinnerService } from 'ngx-spinner';

import { User } from 'src/app/models/user.model';

import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<Array<User>>;
  users: User[];

  constructor(private modalService: ModalService, private spinnerService: NgxSpinnerService, private service: UserService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.service.users.subscribe((users) => {
      this.users = users;
      this.spinnerService.hide();
    });
  }

  openModal() {
    this.modalService.open();
  }
}
