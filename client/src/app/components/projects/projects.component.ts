import { Component, OnInit } from '@angular/core';
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
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  selectedCategory = 'All';
  categories = ['All', 'Web Apps', 'Mobile', 'Full-Stack', 'Open Source', 'Design'];

  projects: Project[] = [
    {
      title: 'Academeet',
      description: 'Collaborative platform for academic researchers to connect and share knowledge.',
      category: 'Full-Stack',
      technologies: ['Angular', 'Nestjs', 'Postgres', 'Socket.io'],
      image: 'academeet.jpeg',
      liveUrl: 'https://acm-ldq1.vercel.app/',
      githubUrl: 'https://github.com/jonesmulinge2001/ACM',
      featured: true
    },
    {
      title: 'Scripture Path',
      description: 'Interactive Bible study platform with personalized learning paths.',
      category: 'Web Apps',
      technologies: ['Angular', 'NestJS', 'MySQL', 'Firebase'],
      image: 'faith.jpeg',
      liveUrl: 'https://faith-learn.vercel.app/',
      githubUrl: 'https://github.com/jonesmulinge2001/FaithLearn',
      featured: true
    },
    {
      title: 'Architecture and Construction',
      description: 'Construction company specializing in design and building of houses.',
      category: 'Mobile',
      technologies: ['React Native', 'Node.js', 'TensorFlow.js', 'MongoDB'],
      image: 'build.jpeg',
      liveUrl: 'https://construction-ten-beta.vercel.app/',
      githubUrl: 'https://github.com/jonesmulinge2001/Construction',
      featured: true
    },
    {
      title: 'Leadership',
      description: 'I invite you to join me on this journey—not as spectators, but as partners in building the Kenya we all deserve.',
      category: 'Open Source',
      technologies: ['Vue.js', 'Socket.io', 'Docker', 'AWS'],
      image: 'jere.jpeg',
      liveUrl: 'https://kilatya-for-kenya.lovable.app/',
      githubUrl: 'https://github.com/nextlevel/code-collab',
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
    this.animateCategoryChange();
  }

  ngOnInit() {
    this.observeProjects();
  }

  private animateCategoryChange() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      projectsGrid.classList.add('animate-fade-out');
      setTimeout(() => {
        projectsGrid.classList.remove('animate-fade-out');
      }, 300);
    }
  }

  private observeProjects() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });
  }
}