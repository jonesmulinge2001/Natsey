import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300" 
         [class.scrolled]="isScrolled">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16 md:h-20">
          
          <!-- Logo -->
          <a [routerLink]="['/']" 
             class="flex items-center space-x-2 text-xl font-bold hover:opacity-80 transition-opacity">
            <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span class="text-white font-bold text-lg">JM</span>
            </div>
            <span class="hidden md:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Jonathan
            </span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1">
            <a *ngFor="let item of navItems" 
               [routerLink]="['/', item.path]" 
               [fragment]="item.path === 'home' ? 'hero' : undefined"
               routerLinkActive="active"
               #rla="routerLinkActive"
               [class.active]="rla.isActive"
               class="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative group">
              {{item.name}}
              <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-1/2 transition-all duration-300"></span>
            </a>
            
            <!-- CTA Button -->
            <a routerLink="/" fragment="contact"
               class="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
              Hire Me
            </a>
          </div>

          <!-- Mobile menu button -->
          <button (click)="toggleMobileMenu()" 
                  class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg *ngIf="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg *ngIf="isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <div *ngIf="isMobileMenuOpen" 
             class="md:hidden py-4 border-t border-gray-100 animate-slideDown">
          <div class="flex flex-col space-y-2">
            <a *ngFor="let item of navItems" 
               [routerLink]="['/', item.path]"
               [fragment]="item.path === 'home' ? 'hero' : undefined"
               (click)="closeMobileMenu()"
               class="px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center">
              <span class="text-lg mr-3">{{item.icon}}</span>
              {{item.name}}
            </a>
            
            <!-- Mobile CTA Button -->
            <div class="pt-4 mt-2 border-t border-gray-200">
              <a routerLink="/" fragment="contact"
                 (click)="closeMobileMenu()"
                 class="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Spacer -->
    <div class="h-16 md:h-20"></div>
  `,
  styles: [`
    .active {
      color: #2563eb;
      font-weight: 600;
    }
    
    .active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      height: 2px;
      background: linear-gradient(to right, #3b82f6, #8b5cf6);
      border-radius: 2px;
    }
    
    .scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-slideDown {
      animation: slideDown 0.3s ease-out;
    }
  `]
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  isScrolled = false;
  
  navItems: NavItem[] = [
    { name: 'Home', path: '', icon: '🏠' },
    { name: 'About', path: 'about', icon: '👤' },
    { name: 'Skills', path: 'skills', icon: '⚡' },
    { name: 'Services', path: 'services', icon: '🛠️' },
    { name: 'Projects', path: 'projects', icon: '💼' },
    // { name: 'Experience', path: 'experience', icon: '📈' },
    { name: 'Contact', path: 'contact', icon: '📧' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
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
}