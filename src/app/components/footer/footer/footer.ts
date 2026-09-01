import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {

currentYear = new Date().getFullYear();

scrollToTop(): void {
  window.scrollTo({
  top: 0,
  behavior: 'smooth'
  });
}

}
