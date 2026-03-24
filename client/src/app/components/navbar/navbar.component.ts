import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

interface NavItem {
  name: string;
  path: string;
  fragment?: string;
  icon: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  isScrolled = false;
  private routerSubscription?: Subscription;
  
  navItems: NavItem[] = [
    { name: 'Home', path: '', fragment: 'hero', icon: 'home' },
    { name: 'About', path: 'about', fragment: 'about', icon: 'person' },
    { name: 'Skills', path: 'skills', fragment: 'skills', icon: 'bolt' },
    { name: 'Services', path: 'services', fragment: 'services', icon: 'build' },
    { name: 'Projects', path: 'projects', fragment: 'projects', icon: 'work' },
    { name: 'Contact', path: 'contact', fragment: 'contact', icon: 'mail' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
      });
    this.onWindowScroll();
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth >= 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  handleNavigation(item: NavItem): void {
    this.closeMobileMenu();
    if (item.fragment && item.path === '') {
      setTimeout(() => {
        const element = document.getElementById(item.fragment!);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }

  scrollToTop(): void {
    this.closeMobileMenu();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}