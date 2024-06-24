import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page {

  constructor(private router: Router) { }

  goToFinancialPage() {
    this.router.navigate(['/financial']);
  }

  goToCameraPage() {
   this.router.navigate(['/camera']);  
  }

  
  viewLocation(){
    this.router.navigate(['/map']);  
  }
  
}
