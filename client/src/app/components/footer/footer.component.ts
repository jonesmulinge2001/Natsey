import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports:[CommonModule, RouterModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  // Company information
  companyInfo = {
    name: 'InLight',
    description: 'Making the world a better place through innovative solutions.',
    city: 'Nairobi, Kenya',
    email: 'nextlevelj101022@gmail.com',
    phone: '+254 (790) 5077-03'
  };

  // Quick links
  quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  // Services links
  services = [
    { name: 'Web Development', path: '/services/web' },
    { name: 'Mobile Apps', path: '/services/mobile' },
    { name: 'UI/UX Design', path: '/services/design' },
    { name: 'Digital Marketing', path: '/services/marketing' },
    { name: 'SEO Optimization', path: '/services/seo' },
    { name: 'Consulting', path: '/services/consulting' }
  ];

  // Social media links
  socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com', color: 'hover:text-blue-700' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com', color: 'hover:text-gray-800' }
  ];

  // Newsletter subscription
  newsletterEmail = '';
  
  subscribeNewsletter() {
    if (this.newsletterEmail) {
      console.log('Subscribing email:', this.newsletterEmail);
      // Add your subscription logic here
      this.newsletterEmail = '';
      alert('Thank you for subscribing!');
    }
  }

  // Get social media icon (simplified version)
  getSocialIcon(icon: string): string {
    switch(icon) {
      case 'facebook': return 'f';
      case 'twitter': return 't';
      case 'instagram': return 'ig';
      case 'linkedin': return 'in';
      case 'github': return 'gh';
      default: return icon.charAt(0).toUpperCase();
    }
  }
}