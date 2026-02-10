import { Component, OnInit, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export interface MenuItem {
  label: string;
  icon: string;
  routerLink: string[];
  styleClass?: string;
}

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  @Input() collapsed = false;

  constructor(public router: Router) { }

  protected sidebarCollapsed = signal(false);
  ngOnInit(): void { }

  protected menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/'],
      styleClass: 'menu-item'
    },
    {
      label: 'User Management',
      icon: 'pi pi-users',
      routerLink: ['/user-app'],
      styleClass: 'menu-item'
    }
  ];
}
