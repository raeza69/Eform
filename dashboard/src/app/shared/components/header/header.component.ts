import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(protected AuthService: AuthService,
    protected router: Router) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  logout() {
    this.AuthService.loginStatus.next(false);
    this.router.navigateByUrl('/login')
  }
}
