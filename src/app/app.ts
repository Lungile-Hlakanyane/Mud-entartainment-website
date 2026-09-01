import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero/hero';
import { About } from './components/about/about/about';
import { Services } from './components/services/services/services';
import { Equipment } from './components/equipment/equipment/equipment';
import { Experiences } from './components/experiences/experiences/experiences';
import { ContactUs } from './components/contact-us/contact-us/contact-us';
import { Footer } from './components/footer/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, About, Services, Equipment, Experiences, ContactUs, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mud-entertainment');
}
