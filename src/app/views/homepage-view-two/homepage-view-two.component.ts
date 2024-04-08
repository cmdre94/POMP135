import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage-view-two',
  templateUrl: './homepage-view-two.component.html',
  styleUrls: ['./homepage-view-two.component.css']
})
export class HomepageViewTwoComponent implements OnInit {
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
