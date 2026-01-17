import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute bottom-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-gray-900">I'm Jonathan Mulinge,</span>
          <span class="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
            Software Engineer
          </span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Building modern, scalable web solutions that empower users and drive business growth.
        </p>
        
        <div class="flex flex-wrap gap-4 justify-center">
          <a routerLink="/projects" 
             class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            View My Work
          </a>
          <a routerLink="/contact" 
             class="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
            Let's Connect
          </a>
        </div>
        
        <!-- Quick Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div class="text-center p-6 bg-white rounded-xl shadow-sm">
            <div class="text-3xl font-bold text-blue-600">50+</div>
            <div class="text-gray-600">Projects</div>
          </div>
          <div class="text-center p-6 bg-white rounded-xl shadow-sm">
            <div class="text-3xl font-bold text-purple-600">5+</div>
            <div class="text-gray-600">Years Experience</div>
          </div>
          <div class="text-center p-6 bg-white rounded-xl shadow-sm">
            <div class="text-3xl font-bold text-blue-600">100%</div>
            <div class="text-gray-600">Client Satisfaction</div>
          </div>
          <div class="text-center p-6 bg-white rounded-xl shadow-sm">
            <div class="text-3xl font-bold text-purple-600">24/7</div>
            <div class="text-gray-600">Support</div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
  `]
})
export class HomeComponent {}