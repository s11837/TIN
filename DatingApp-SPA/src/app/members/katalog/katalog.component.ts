import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.component.html',
  styleUrls: ['./katalog.component.css']
})
export class KatalogComponent implements OnInit {
  myControl = new FormControl();
  users: User[];
  filteredOptions: Observable<User[]>;

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }

  displayFn(user?: User): string | undefined {
    return user ? user.username : undefined;
  }

  private _filter(username: string): User[] {
    const filterValue = username.toLowerCase();

    return this.users.filter(option => option.username.toLowerCase().indexOf(filterValue) === 0);
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(username => username ? this._filter(username) : this.users.slice())
      );
    }, error => {
      this.alertify.error(error);
    });
  }
}
