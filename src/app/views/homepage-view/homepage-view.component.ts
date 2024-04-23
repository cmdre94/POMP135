import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.css']
})
export class HomepageViewComponent implements OnInit {
  public activeRoute: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  /**
   * @description - Routes to the passed in view
   * @param {string} url - the URL to route to
   * @returns {void}
   */
  public routeToView(url: string): void {
    this.router.navigate([url]);
    this.activeRoute = url;
  }

}
