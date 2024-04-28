import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  isMenuOpen: boolean = false;

  // toggleMenu(): void {
  //   const mobileMenu = document.getElementById('mobile-menu');
  //   mobileMenu.classList.toggle('hidden');
  // }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
