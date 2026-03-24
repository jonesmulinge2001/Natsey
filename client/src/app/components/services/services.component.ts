import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      title: 'Web Application Development',
      description: 'Custom web applications built with modern frameworks and scalable architectures.',
      icon: 'code',
      gradient: 'from-blue-500 to-cyan-500',
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
      icon: 'layers',
      gradient: 'from-purple-500 to-pink-500',
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
      icon: 'design_services',
      gradient: 'from-orange-500 to-red-500',
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
      icon: 'speed',
      gradient: 'from-green-500 to-emerald-500',
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
      icon: 'psychology',
      gradient: 'from-indigo-500 to-blue-500',
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
      icon: 'build',
      gradient: 'from-gray-600 to-gray-800',
      features: [
        'Bug Fixes',
        'Security Updates',
        'Feature Updates',
        '24/7 Monitoring'
      ]
    }
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and creating a detailed project plan.',
      icon: 'search'
    },
    {
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes for your approval.',
      icon: 'palette'
    },
    {
      title: 'Development',
      description: 'Building your solution using modern technologies and best practices.',
      icon: 'developer_mode'
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing to ensure functionality, performance, and security.',
      icon: 'bug_report'
    },
    {
      title: 'Deployment & Launch',
      description: 'Smooth deployment to production environment and launch.',
      icon: 'rocket_launch'
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance after launch.',
      icon: 'support_agent'
    }
  ];

  ngOnInit() {
    this.observeElements();
  }

  private observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .process-step').forEach(el => {
      observer.observe(el);
    });
  }
}