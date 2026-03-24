import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header with Enhanced Animation -->
          <div class="text-center mb-20">
            <div class="inline-flex items-center justify-center mb-4">
              <div class="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
              <span class="mx-4 text-sm font-semibold text-blue-600 uppercase tracking-wider">Get to know me</span>
              <div class="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
            <h2 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              About Me
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crafting innovative digital experiences that bridge the gap between vision and reality
            </p>
          </div>

          <!-- Content Grid with Enhanced Layout -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <!-- Profile Section with Advanced Styling -->
            <div class="relative">
              <!-- Profile Image Container with Glass Morphism -->
              <div class="relative group">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div class="relative w-72 h-72 md:w-96 md:h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img src="jonathan.jpeg" 
                       alt="Profile" 
                       class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110">
                </div>
                
                <!-- Floating Experience Card -->
                <div class="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl p-4 transform transition-all duration-300 hover:scale-110 z-20">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <span class="material-icons text-white text-2xl">stars</span>
                    </div>
                    <div>
                      <div class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                      <div class="text-sm text-gray-600 font-medium">Years Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Stats Cards with Hover Effects -->
              <div class="mt-12 grid grid-cols-2 gap-4">
                <div class="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <span class="material-icons text-4xl text-blue-600 mb-3">code</span>
                  <div class="text-lg font-bold text-gray-800 mb-1">Full-Stack</div>
                  <div class="text-sm text-gray-600">Expert Developer</div>
                </div>
                <div class="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <span class="material-icons text-4xl text-purple-600 mb-3">language</span>
                  <div class="text-lg font-bold text-gray-800 mb-1">Global</div>
                  <div class="text-sm text-gray-600">Remote Ready</div>
                </div>
              </div>
            </div>

            <!-- Bio Section with Enhanced Typography -->
            <div class="space-y-8">
              <h3 class="text-4xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Transforming Ideas Into<br>
                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Exceptional Digital Solutions</span>
              </h3>
              
              <div class="space-y-5 text-gray-700 leading-relaxed">
                <p class="text-lg">
                  Hello! I'm <span class="font-semibold text-gray-900">Jonathan Mulinge Mwandi</span>, a passionate software engineer 
                  dedicated to building innovative web applications that make a difference. 
                  With over 5 years of experience, I specialize in creating scalable, 
                  user-centric solutions that drive business growth.
                </p>
                
                <p class="text-lg">
                  My expertise spans across the full development lifecycle, from concept 
                  to deployment. I'm passionate about clean architecture, performance 
                  optimization, and leveraging cutting-edge technologies to solve 
                  complex challenges.
                </p>
                
                <p class="text-lg">
                  Beyond coding, I'm an active open-source contributor, tech writer, 
                  and mentor. I believe in continuous learning and sharing knowledge 
                  to help grow the developer community.
                </p>
              </div>
              
              <!-- Professional Info Cards with Icons -->
              <div class="grid grid-cols-2 gap-4 pt-4">
                <div class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group cursor-default">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span class="material-icons text-white text-xl">location_on</span>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Location</div>
                    <div class="font-medium text-gray-900">Nairobi, Kenya</div>
                  </div>
                </div>
                
                <div class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group cursor-default">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span class="material-icons text-white text-xl">email</span>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Email</div>
                    <div class="font-medium text-gray-900 truncate">jonathanmulingemwandi&#64;gmail.com</div>
                  </div>
                </div>
              </div>
              
              <!-- Professional Skills Tags -->
              <div class="pt-4">
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-default">Angular</span>
                  <span class="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors cursor-default">React</span>
                  <span class="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium hover:bg-green-100 transition-colors cursor-default">Node.js</span>
                  <span class="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-100 transition-colors cursor-default">TypeScript</span>
                  <span class="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium hover:bg-red-100 transition-colors cursor-default">Python</span>
                  <span class="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors cursor-default">Docker</span>
                  <span class="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium hover:bg-teal-100 transition-colors cursor-default">AWS</span>
                </div>
              </div>
              
              <!-- Enhanced CTA Buttons -->
              <div class="flex flex-wrap gap-4 pt-2">
                <button (click)="downloadResume()"
                        class="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  <span class="material-icons text-xl">download</span>
                  Download Resume
                </button>
                
                <button (click)="openLinkedIn()"
                        class="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  <span class="material-icons text-xl">link</span>
                  Connect With Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Jonathan_Mwandi_Resume.pdf';
    link.click();
  }
  
  openLinkedIn(): void {
    window.open('https://linkedin.com/in/your-profile', '_blank');
  }
}