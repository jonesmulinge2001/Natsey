import { Component } from '@angular/core';
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
  template: `
    <section id="skills" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Technical Skills
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Mastering the tools and technologies that power modern web applications
          </p>
        </div>

        <!-- Skill Categories -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Frontend Skills -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                <span class="text-2xl">🖥️</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-800">Frontend Development</h3>
            </div>
            <div class="space-y-6">
              <div *ngFor="let skill of frontendSkills" class="skill-item">
                <div class="flex justify-between mb-2">
                  <span class="font-medium text-gray-700">{{skill.name}}</span>
                  <span class="font-semibold text-blue-600">{{skill.level}}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000" 
                       [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                <span class="text-2xl">⚙️</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-800">Backend Development</h3>
            </div>
            <div class="space-y-6">
              <div *ngFor="let skill of backendSkills" class="skill-item">
                <div class="flex justify-between mb-2">
                  <span class="font-medium text-gray-700">{{skill.name}}</span>
                  <span class="font-semibold text-purple-600">{{skill.level}}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000" 
                       [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools & Technologies -->
        <div class="mb-12">
          <h3 class="text-3xl font-bold text-center mb-10 text-gray-800">Tools & Technologies</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div *ngFor="let tech of technologies" 
                 class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="text-4xl mb-3">{{tech.icon}}</div>
              <div class="font-semibold text-gray-800">{{tech.name}}</div>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div>
          <h3 class="text-3xl font-bold text-center mb-10 text-gray-800">Soft Skills</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let skill of softSkills" 
                 class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
              <div class="text-4xl mb-4">{{skill.icon}}</div>
              <h4 class="text-xl font-bold mb-2 text-gray-800">{{skill.name}}</h4>
              <p class="text-gray-600">{{skill.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: 'Angular', level: 95, category: 'frontend', icon: '🅰️' },
    { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
    { name: 'TypeScript', level: 92, category: 'frontend', icon: '📘' },
    { name: 'JavaScript', level: 94, category: 'frontend', icon: '🟨' },
    { name: 'Tailwind CSS', level: 96, category: 'frontend', icon: '🎨' },
    { name: 'HTML5/CSS3', level: 98, category: 'frontend', icon: '📄' }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', level: 92, category: 'backend', icon: '🟢' },
    { name: 'Python', level: 88, category: 'backend', icon: '🐍' },
    { name: 'MongoDB', level: 85, category: 'backend', icon: '🍃' },
    { name: 'PostgreSQL', level: 83, category: 'backend', icon: '🐘' },
    { name: 'GraphQL', level: 80, category: 'backend', icon: '📊' },
    { name: 'Docker', level: 78, category: 'backend', icon: '🐳' }
  ];

  technologies = [
    { name: 'Git', icon: '📊' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Jest', icon: '✅' },
    { name: 'Figma', icon: '🎯' },
    { name: 'VS Code', icon: '💻' }
  ];

  softSkills = [
    { name: 'Problem Solving', description: 'Breaking down complex problems into manageable solutions', icon: '🧩' },
    { name: 'Communication', description: 'Clear and effective technical communication', icon: '🗣️' },
    { name: 'Team Collaboration', description: 'Working effectively in agile teams', icon: '👥' },
    { name: 'Time Management', description: 'Meeting deadlines while maintaining quality', icon: '⏰' }
  ];
}