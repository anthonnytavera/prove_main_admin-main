import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, DrawerModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] = [];
    sidebarVisible = false;

    ngOnInit() {
     this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
        { label: 'Activity', icon: 'pi pi-fw pi-calendar', routerLink: '/activity' },
        { label: 'Trainer', icon: 'pi pi-fw pi-user', routerLink: '/trainer' },
      ];
    }

    closeDrawer() {
      this.sidebarVisible = false;
    }
}
