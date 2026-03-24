import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  frontendSkills: Skill[] = [
    { name: 'Angular', level: 95, category: 'frontend', icon: 'code' },
    { name: 'React', level: 90, category: 'frontend', icon: 'react' },
    { name: 'TypeScript', level: 92, category: 'frontend', icon: 'data_object' },
    { name: 'JavaScript', level: 94, category: 'frontend', icon: 'javascript' },
    { name: 'Tailwind CSS', level: 96, category: 'frontend', icon: 'palette' },
    { name: 'HTML5/CSS3', level: 98, category: 'frontend', icon: 'web' }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', level: 92, category: 'backend', icon: 'storage' },
    { name: 'Python', level: 88, category: 'backend', icon: 'terminal' },
    { name: 'MongoDB', level: 85, category: 'backend', icon: 'database' },
    { name: 'PostgreSQL', level: 83, category: 'backend', icon: 'table_chart' },
    { name: 'GraphQL', level: 80, category: 'backend', icon: 'api' },
    { name: 'Docker', level: 78, category: 'backend', icon: 'deployed_code' }
  ];

  technologies = [
    { name: 'Git', icon: 'account_tree' },
    { name: 'AWS', icon: 'cloud' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Jest', icon: 'test' },
    { name: 'Figma', icon: 'design' },
    { name: 'VS Code', icon: 'code' }
  ];

  softSkills = [
    { name: 'Problem Solving', description: 'Breaking down complex problems into manageable solutions', icon: 'puzzle' },
    { name: 'Communication', description: 'Clear and effective technical communication', icon: 'chat' },
    { name: 'Team Collaboration', description: 'Working effectively in agile teams', icon: 'groups' },
    { name: 'Time Management', description: 'Meeting deadlines while maintaining quality', icon: 'schedule' }
  ];

  ngOnInit() {
    // Add intersection observer for animation
    this.observeSkillBars();
  }

  private observeSkillBars() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
          skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (width) {
              (bar as HTMLElement).style.width = width;
            }
          });
        }
      });
    }, { threshold: 0.1 });

    const skillSections = document.querySelectorAll('.skill-section');
    skillSections.forEach(section => observer.observe(section));
  }
}