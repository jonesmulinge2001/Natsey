import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              My Services
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services; let i = index" 
               class="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <!-- Icon with gradient background -->
            <div class="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6">
              <span class="text-3xl text-white">{{service.icon}}</span>
            </div>
            
            <h3 class="text-2xl font-bold mb-4 text-gray-800">{{service.title}}</h3>
            <p class="text-gray-600 mb-6">{{service.description}}</p>
            
            <!-- Features List -->
            <ul class="space-y-3 mb-8">
              <li *ngFor="let feature of service.features" class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{{feature}}</span>
              </li>
            </ul>
            
            <!-- CTA Button -->
            <button class="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <!-- Process Section -->
        <div class="mt-20 pt-16 border-t border-gray-200">
          <h3 class="text-3xl font-bold text-center mb-12 text-gray-800">My Work Process</h3>
          
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>
            
            <!-- Process Steps -->
            <div class="space-y-12 relative">
              <div *ngFor="let step of processSteps; let i = index" 
                   class="flex flex-col md:flex-row items-center"
                   [class.md:flex-row-reverse]="i % 2 !== 0">
                <!-- Step Content -->
                <div class="md:w-5/12" [class.md:text-right]="i % 2 === 0">
                  <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    {{i + 1}}
                  </div>
                  <h4 class="text-xl font-bold mb-2 text-gray-800">{{step.title}}</h4>
                  <p class="text-gray-600">{{step.description}}</p>
                </div>
                
                <!-- Spacer for alternating sides -->
                <div class="md:w-2/12"></div>
                
                <!-- Empty div for alternating sides -->
                <div class="md:w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Web Application Development',
      description: 'Custom web applications built with modern frameworks and scalable architectures.',
      icon: '💻',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'Real-time Features',
        'API Integration'
      ]
    },
    {
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from frontend interfaces to backend systems and databases.',
      icon: '🚀',
      features: [
        'Frontend Development',
        'Backend APIs',
        'Database Design',
        'DevOps & Deployment'
      ]
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive user interfaces and engaging user experiences.',
      icon: '🎨',
      features: [
        'Wireframing & Prototyping',
        'User Research',
        'Visual Design',
        'Usability Testing'
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'Improving application speed, scalability, and overall performance.',
      icon: '⚡',
      features: [
        'Code Optimization',
        'Database Tuning',
        'Caching Strategies',
        'Load Testing'
      ]
    },
    {
      title: 'Technical Consulting',
      description: 'Expert guidance on technology decisions, architecture, and best practices.',
      icon: '🔍',
      features: [
        'Architecture Review',
        'Technology Selection',
        'Code Audits',
        'Best Practices'
      ]
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance for existing applications.',
      icon: '🔧',
      features: [
        'Bug Fixes',
        'Security Updates',
        'Feature Updates',
        '24/7 Monitoring'
      ]
    }
  ];

  processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and creating a detailed project plan.'
    },
    {
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes for your approval.'
    },
    {
      title: 'Development',
      description: 'Building your solution using modern technologies and best practices.'
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing to ensure functionality, performance, and security.'
    },
    {
      title: 'Deployment & Launch',
      description: 'Smooth deployment to production environment and launch.'
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance after launch.'
    }
  ];
}