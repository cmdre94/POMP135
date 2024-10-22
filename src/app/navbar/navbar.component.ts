import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public activeRoute: string;
  public isLoggedIn = false;
  public isAdmin = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  /**
   * @description - route to the view URL provided to this method
   * @param {string} url - the URL to route to
   * @returns {void}
   */
  public routeToView(url: string): void {
    this.router.navigate([url]);
    this.activeRoute = url;
  }
}
