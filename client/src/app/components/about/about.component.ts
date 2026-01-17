import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                About Me
              </span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate software engineer dedicated to creating exceptional digital experiences
            </p>
          </div>

          <!-- Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Profile Image & Info -->
            <div>
              <div class="relative">
                <div class="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                       alt="Profile" 
                       class="w-full h-full object-cover">
                </div>
                
                <!-- Experience Badge -->
                <div class="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg">
                  <div class="text-3xl font-bold">5+</div>
                  <div class="text-sm">Years Experience</div>
                </div>
              </div>
              
              <!-- Quick Info -->
              <div class="mt-12 grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <div class="text-2xl font-bold text-blue-600">Full-Stack</div>
                  <div class="text-gray-600">Specialization</div>
                </div>
                <div class="text-center p-4 bg-purple-50 rounded-lg">
                  <div class="text-2xl font-bold text-purple-600">Remote</div>
                  <div class="text-gray-600">Available Worldwide</div>
                </div>
              </div>
            </div>

            <!-- Bio & Details -->
            <div>
              <h3 class="text-3xl font-bold mb-6 text-gray-800">
                Crafting Digital Solutions That Make an Impact
              </h3>
              
              <div class="space-y-4 text-lg text-gray-700">
                <p>
                  Hello! I'm Next Level, a passionate software engineer with over 5 years of experience 
                  in building modern web applications. I specialize in creating scalable, user-friendly 
                  solutions that solve real-world problems.
                </p>
                
                <p>
                  My journey in software development started with a Computer Science degree and has evolved 
                  through working with various startups and tech companies. I believe in writing clean, 
                  maintainable code and following best practices.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge through technical blogs and workshops.
                </p>
              </div>
              
              <!-- Personal Info -->
              <div class="mt-8 grid grid-cols-2 gap-4">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span class="text-blue-600">📍</span>
                  </div>
                  <div>
                    <div class="font-semibold">Location</div>
                    <div class="text-gray-600">San Francisco, CA</div>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span class="text-purple-600">📧</span>
                  </div>
                  <div>
                    <div class="font-semibold">Email</div>
                    <div class="text-gray-600">hello&#64;nextlevel.dev</div>
                  </div>
                </div>
              </div>
              
              <!-- CTA -->
              <div class="mt-10">
                <a href="/assets/resume.pdf" 
                   download
                   class="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <span>📄</span>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}