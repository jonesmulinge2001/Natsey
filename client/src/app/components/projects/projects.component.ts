import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Featured Projects
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Real-world applications solving complex problems with elegant solutions
          </p>
          
          <!-- Category Filters -->
          <div class="flex flex-wrap justify-center gap-3 mb-12">
            <button *ngFor="let category of categories" 
                    [class.active]="selectedCategory === category"
                    (click)="filterProjects(category)"
                    class="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors"
                    [class.bg-gradient-to-r]="selectedCategory === category"
                    [class.from-blue-600]="selectedCategory === category"
                    [class.to-purple-600]="selectedCategory === category"
                    [class.text-white]="selectedCategory === category"
                    [class.border-transparent]="selectedCategory === category">
              {{category}}
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div *ngFor="let project of filteredProjects" 
               class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <!-- Project Image -->
            <div class="h-48 bg-gradient-to-r from-blue-100 to-purple-100 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-6xl">{{project.image}}</div>
              </div>
              <!-- Category Badge -->
              <div class="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                {{project.category}}
              </div>
            </div>
            
            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">{{project.title}}</h3>
              <p class="text-gray-600 mb-4">{{project.description}}</p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span *ngFor="let tech of project.technologies" 
                      class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  {{tech}}
                </span>
              </div>
              
              <!-- Links -->
              <div class="flex gap-3">
                <a *ngIf="project.liveUrl" 
                   [href]="project.liveUrl" 
                   target="_blank"
                   class="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors">
                  Live Demo
                </a>
                <a [href]="project.githubUrl" 
                   target="_blank"
                   class="flex-1 text-center px-4 py-2 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors flex items-center justify-center gap-2">
                  <span>🐙</span>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- View All Projects CTA -->
        <div class="text-center">
          <button class="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View All Projects
            <svg class="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  selectedCategory = 'All';   
  categories = ['All', 'Web Apps', 'Mobile', 'Full-Stack', 'Open Source', 'Design'];

  projects: Project[] = [
    {
      title: 'Academeet',
      description: 'Collaborative platform for academic researchers to connect and share knowledge.',
      category: 'Full-Stack',
      technologies: ['Angular', 'Nestjs', 'Postgres', 'Socket.io'],
      image: '🎓',
      liveUrl: 'https://academeet.demo',
      githubUrl: 'https://github.com/nextlevel/academeet',
      featured: true
    },
    {
      title: 'UniTok',
      description: 'University task management system with real-time collaboration features.',
      category: 'Web Apps',
      technologies: ['React', 'Express', 'PostgreSQL', 'Redis'],
      image: '✅',
      liveUrl: 'https://unitok.demo',
      githubUrl: 'https://github.com/nextlevel/unitok',
      featured: true
    },
    {
      title: 'Scripture Path',
      description: 'Interactive Bible study platform with personalized learning paths.',
      category: 'Web Apps',
      technologies: ['Angular', 'NestJS', 'MySQL', 'Firebase'],
      image: '📖',
      liveUrl: 'https://faith-learn.vercel.app/',
      githubUrl: 'https://github.com/nextlevel/scripture-path',
      featured: true
    },
    {
      title: 'Health Tracker Mobile',
      description: 'Mobile-first health monitoring app with AI-powered insights.',
      category: 'Mobile',
      technologies: ['React Native', 'Node.js', 'TensorFlow.js', 'MongoDB'],
      image: '🏥',
      liveUrl: 'https://healthtracker.demo',
      githubUrl: 'https://github.com/nextlevel/health-tracker',
      featured: true
    },
    {
      title: 'Code Collab',
      description: 'Real-time collaborative code editor for remote pair programming.',
      category: 'Open Source',
      technologies: ['Vue.js', 'Socket.io', 'Docker', 'AWS'],
      image: '👨‍💻',
      liveUrl: 'https://codecollab.demo',
      githubUrl: 'https://github.com/nextlevel/code-collab',
      featured: true
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Analytics dashboard for e-commerce businesses with real-time data visualization.',
      category: 'Full-Stack',
      technologies: ['Angular', 'Python', 'Django', 'Chart.js'],
      image: '📊',
      liveUrl: 'https://ecommerce-dashboard.demo',
      githubUrl: 'https://github.com/nextlevel/ecommerce-dashboard',
      featured: true
    }
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
  }
}