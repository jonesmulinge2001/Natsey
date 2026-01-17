import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  username: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Get In Touch
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-white rounded-2xl p-8 shadow-xl">
              <h3 class="text-2xl font-bold mb-6 text-gray-800">Send Me a Message</h3>
              
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input type="text" 
                           [(ngModel)]="formData.name" 
                           name="name" 
                           required
                           class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors">
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input type="email" 
                           [(ngModel)]="formData.email" 
                           name="email" 
                           required
                           class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input type="text" 
                         [(ngModel)]="formData.subject" 
                         name="subject" 
                         required
                         class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea [(ngModel)]="formData.message" 
                            name="message" 
                            rows="6"
                            required
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"></textarea>
                </div>
                
                <button type="submit" 
                        [disabled]="!contactForm.valid || isSubmitting"
                        class="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed">
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting">Sending...</span>
                </button>
              </form>
            </div>

            <!-- Contact Information -->
            <div>
              <div class="bg-white rounded-2xl p-8 shadow-xl mb-8">
                <h3 class="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <span class="text-2xl text-blue-600">📍</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-800">Location</h4>
                      <p class="text-gray-600">San Francisco, California</p>
                      <p class="text-sm text-gray-500">Available for remote work worldwide</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                      <span class="text-2xl text-purple-600">📧</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-800">Email</h4>
                      <a href="mailto:hello@nextlevel.dev" class="text-blue-600 hover:underline">
                        hello@nextlevel.dev
                      </a>
                      <p class="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <span class="text-2xl text-blue-600">📱</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-800">Phone</h4>
                      <a href="tel:+14155550123" class="text-blue-600 hover:underline">
                        +1 (415) 555-0123
                      </a>
                      <p class="text-sm text-gray-500">Mon-Fri, 9am-6pm PST</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="bg-white rounded-2xl p-8 shadow-xl">
                <h3 class="text-2xl font-bold mb-6 text-gray-800">Connect With Me</h3>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a *ngFor="let social of socialLinks" 
                     [href]="social.url" 
                     target="_blank"
                     class="flex flex-col items-center p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <span class="text-3xl mb-2">{{social.icon}}</span>
                    <span class="font-medium text-gray-800">{{social.name}}</span>
                    <span class="text-sm text-gray-500 truncate w-full text-center">{{social.username}}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  socialLinks: SocialLink[] = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/nextlevel', username: '@nextlevel' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/nextlevel', username: 'in/nextlevel' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/nextlevel', username: '@nextlevel' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/nextlevel', username: '@nextlevel' },
    { name: 'Dribbble', icon: '🎨', url: 'https://dribbble.com/nextlevel', username: '@nextlevel' },
    { name: 'Codepen', icon: '✏️', url: 'https://codepen.io/nextlevel', username: '@nextlevel' },
    { name: 'Dev.to', icon: '👨‍💻', url: 'https://dev.to/nextlevel', username: '@nextlevel' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/nextlevel', username: '@nextlevel' }
  ];

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      this.isSubmitting = false;
    }, 1500);
  }
}