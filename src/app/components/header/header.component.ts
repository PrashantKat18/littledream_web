import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  navbarOpen : boolean = false;
  loginDetails:any
  isActiveProject: any;
  constructor(public dialog: MatDialog,private router: Router) { 
  }

  ngOnInit(): void {
  }


  activeProject() {
      this.isActiveProject = true;
    }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleNavbar1() {
    this.navbarOpen = !this.navbarOpen;
  }

}
