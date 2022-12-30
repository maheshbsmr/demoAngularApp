import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
IsNav:boolean= true;
  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.menu = [
      {
        displayName: 'Accounts',
        iconName: 'description',          
        children: [
          {
            displayName: 'fees',
            iconName: 'how_to_reg',
            route: '/home/fees'
          },
          { 
            displayName: 'FeesSetup',
            iconName: 'waves',
            route: '/home/feesSetup'
          }
        ]
      },
      {
        displayName: 'Attendence',
        iconName: 'group',
        children: [
            {
              displayName: 'Búsqueda Perfil',
              iconName: 'search',
              route: '/busquedaperfiles'
            }
          ]
        },
        {
          displayName: 'Time-Mgmt',
          iconName: 'group',
          children: [
              {
                displayName: 'Time-setup',
                iconName: 'access_time',
                route: '/timesetup'
              }
            ]
          },
      {
        displayName: 'Perfiles',
        iconName: 'group',
        children: [
            {
              displayName: 'Búsqueda Perfil',
              iconName: 'search',
              route: '/busquedaperfiles'
            }
          ]
        }
    ];
  }
  @ViewChild('sidenav')
  sidenavs!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  showSubmenu1: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  menu:any[]=[]

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  logOut(){
    this.authenticationService.logout();

  }

}
