import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Role } from '../model/role/role';
import { User } from '../model/role/user';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
@ViewChild('sidenav')
sidenavs!: MatSidenav;
isExpanded = true;
showSubmenu: boolean = false;
showSubmenu1: boolean = false;
isShowing = false;
showSubSubMenu: boolean = false;
menu:any[]=[]
filtermenu:any[]=[]
IsNav:boolean= true;
user: User;
constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
}
// get isAdmin() {
//   debugger
//   return this.user && this.user.roleType === Role.User;
// }

  ngOnInit(): void {
    debugger
        let isAdmin = this.user.roleType === Role.User ? true :false;      
        this.menu = [
          {
            displayName: 'Accounts',
            iconName: 'description',   
            isAdmin:this.user.roleType == Role.User ? false :true,   
            children: [
              {
                displayName: 'fees',
                iconName: 'how_to_reg',
                route: '/home/fees',
               
              },
              { 
                displayName: 'FeesSetup',
                iconName: 'waves',
                route: '/home/feesSetup',
              }
            ]
          },
          {
            displayName: 'Attendence',
            iconName: 'group',
            children: [
                {
                  displayName: 'Entry',
                  iconName: 'search',
                  route: '/home/attendenceEntry'
                }
              ]
            },
            {
              displayName: 'Time-Mgmt',
              iconName: 'group',
              isAdmin:this.user.roleType == Role.User ? false :true, 
              children: [
                  {
                    displayName: 'Time-setup',
                    iconName: 'access_time',
                    route: '/home/timesetup'
                  }
                ]
              },
         
            {
              displayName: 'Library',
              iconName: 'description',   
              isAdmin:this.user.roleType == Role.User ? false :true,   
              children: [
                {
                  displayName: 'fees',
                  iconName: 'how_to_reg',
                  route: '/home/fees',
                 
                },
                { 
                  displayName: 'FeesSetup',
                  iconName: 'waves',
                  route: '/home/feesSetup',
                }
              ]
            },
            {
              displayName: 'Examinatin',
              iconName: 'description',   
              isAdmin:this.user.roleType == Role.User ? false :true,   
              children: [
                {
                  displayName: 'fees',
                  iconName: 'how_to_reg',
                  route: '/home/fees',
                 
                },
                { 
                  displayName: 'FeesSetup',
                  iconName: 'waves',
                  route: '/home/feesSetup',
                }
              ]
            },
            {
              displayName: 'Faculty',
              iconName: 'description',   
              isAdmin:this.user.roleType == Role.User ? false :true,   
              children: [
                {
                  displayName: 'fees',
                  iconName: 'how_to_reg',
                  route: '/home/fees',
                 
                },
                { 
                  displayName: 'FeesSetup',
                  iconName: 'waves',
                  route: '/home/feesSetup',
                }
              ]
            },
            {
              displayName: 'Admission',
              iconName: 'description',   
              isAdmin:this.user.roleType == Role.User ? false :true,   
              children: [
                {
                  displayName: 'fees',
                  iconName: 'how_to_reg',
                  route: '/home/fees',
                 
                },
                { 
                  displayName: 'FeesSetup',
                  iconName: 'waves',
                  route: '/home/feesSetup',
                }
              ]
            },
            {
              displayName: 'Accounts',
              iconName: 'description',   
              isAdmin:this.user.roleType == Role.User ? false :true,   
              children: [
                {
                  displayName: 'fees',
                  iconName: 'how_to_reg',
                  route: '/home/fees',
                 
                },
                { 
                  displayName: 'FeesSetup',
                  iconName: 'waves',
                  route: '/home/feesSetup',
                }
              ]
            },
            {
              displayName: 'Perfiles',
              iconName: 'group',
              children: [
                  {
                    displayName: 'Employee',
                    iconName: 'search',
                    route: '/home/empAccess'
                  }
                ]
              },
        ];
        this.filtermenu = this.menu.filter(x=>x.isAdmin != false);
      }

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
