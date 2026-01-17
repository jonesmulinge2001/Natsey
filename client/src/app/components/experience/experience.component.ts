import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  type: 'work' | 'education';
  logo: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Experience & Education
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <!-- Timeline -->
        <div class="max-w-4xl mx-auto relative">
          <!-- Timeline Line -->
          <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <!-- Timeline Items -->
          <ng-container *ngFor="let exp of experiences; let i = index">
            <div class="relative md:w-1/2" 
                 [class.md:ml-auto]="i % 2 === 0 && i !== 0"
                 [class.md:mr-auto]="i % 2 !== 0"
                 [class.md:pl-12]="i % 2 === 0 && i !== 0"
                 [class.md:pr-12]="i % 2 !== 0">
              
              <!-- Timeline Dot -->
              <div class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white shadow-lg"></div>

              <!-- Content Card -->
              <div class="ml-12 md:ml-0 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <!-- Header -->
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center mr-4">
                    <span class="text-2xl">{{exp.logo}}</span>
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <h3 class="text-xl font-bold text-gray-800">{{exp.position}}</h3>
                      <span class="px-2 py-1 text-xs font-semibold rounded-full" 
                            [class.bg-blue-100]="exp.type === 'work'"
                            [class.text-blue-600]="exp.type === 'work'"
                            [class.bg-purple-100]="exp.type === 'education'"
                            [class.text-purple-600]="exp.type === 'education'">
                        {{exp.type === 'work' ? 'Work' : 'Education'}}
                      </span>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-700">{{exp.company}}</h4>
                    <p class="text-gray-500 text-sm">{{exp.duration}}</p>
                  </div>
                </div>

                <!-- Description -->
                <p class="text-gray-600 mb-4">{{exp.description}}</p>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of exp.technologies" class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {{tech}}
                  </span>
                </div>
              </div>
            </div>
          </ng-container>
        </div>

        <!-- Certifications -->
        <div class="mt-20 pt-16 border-t border-gray-200">
          <h3 class="text-3xl font-bold text-center mb-12 text-gray-800">Certifications</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let cert of certifications" class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-3 shadow-sm">
                  <span class="text-xl">🏆</span>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800">{{cert.title}}</h4>
                  <p class="text-sm text-gray-600">{{cert.issuer}}</p>
                </div>
              </div>
              <p class="text-sm text-gray-700 mb-3">{{cert.description}}</p>
              <div class="flex justify-between items-center">
                <span class="text-xs text-gray-500">{{cert.date}}</span>
                <span class="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">Credential ID: {{cert.id}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full-Stack Developer',
      duration: '2021 - Present',
      description: 'Leading development of enterprise web applications, mentoring junior developers, and implementing best practices.',
      technologies: ['Angular', 'Node.js', 'AWS', 'Microservices', 'Docker'],
      type: 'work',
      logo: '💼'
    },
    {
      company: 'Digital Innovations LLC',
      position: 'Frontend Developer',
      duration: '2019 - 2021',
      description: 'Developed responsive web applications, collaborated with UX/UI designers, and improved application performance.',
      technologies: ['React', 'TypeScript', 'Redux', 'SASS', 'Jest'],
      type: 'work',
      logo: '🚀'
    },
    {
      company: 'Startup Accelerator',
      position: 'Software Engineer',
      duration: '2018 - 2019',
      description: 'Built MVP products for multiple startups, implemented features end-to-end, and participated in product decisions.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Firebase', 'Heroku'],
      type: 'work',
      logo: '⚡'
    },
    {
      company: 'Stanford University',
      position: 'Master of Computer Science',
      duration: '2016 - 2018',
      description: 'Specialized in Web Technologies and Human-Computer Interaction. GPA: 3.9/4.0',
      technologies: ['Algorithms', 'Machine Learning', 'HCI', 'Cloud Computing'],
      type: 'education',
      logo: '🎓'
    },
    {
      company: 'MIT',
      position: 'Bachelor of Computer Science',
      duration: '2012 - 2016',
      description: 'Graduated with Honors. President of Computer Science Club.',
      technologies: ['Data Structures', 'Networks', 'Databases', 'Software Engineering'],
      type: 'education',
      logo: '📚'
    }
  ];

  certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      description: 'Designing and deploying scalable systems on AWS',
      date: '2022',
      id: 'AWS-12345'
    },
    {
      title: 'Angular Expert Certification',
      issuer: 'Google Developers',
      description: 'Advanced Angular patterns and best practices',
      date: '2021',
      id: 'ANG-67890'
    },
    {
      title: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      description: 'Agile project management and team leadership',
      date: '2020',
      id: 'PSM-I-54321'
    }
  ];
}
