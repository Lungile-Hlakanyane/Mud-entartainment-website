import { Component } from '@angular/core';
import { FormsModule, FormBuilder,Validators, FormGroup } from '@angular/forms';
import { QuoteFormData } from '../../../models/QuoteFormData.model';

@Component({
  imports: [FormsModule],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {

 quoteModalOpen = false;
 isSubmitting = false;

 quoteFormData: QuoteFormData = {
 name: '',
 email: '',
 phone: '',
 company: '',
 eventType: '',
 eventDate: '',
 venue: '',
 guests: null,
 services: [],
 message: ''
};

toggleMenu(): void {
this.menuOpen = !this.menuOpen;
}

closeMenu(): void {
this.menuOpen = false;
}


openQuoteModal(): void {

this.quoteModalOpen = true;

this.menuOpen = false;

document.body.style.overflow = 'hidden';

}


openQuoteFromMenu(): void {

this.closeMenu();

this.openQuoteModal();

}


closeQuoteModal(): void {

if (this.isSubmitting) {
  return;
}

this.quoteModalOpen = false;

document.body.style.overflow = '';

}


toggleService(service: string): void {

const index =
  this.quoteFormData.services.indexOf(service);


if (index > -1) {

  this.quoteFormData.services.splice(index, 1);

} else {

  this.quoteFormData.services.push(service);

}

}


isServiceSelected(service: string): boolean {
return this.quoteFormData.services.includes(service);
}


submitQuote(): void {
this.isSubmitting = true;

console.log(
  'M.U.D Entertainment Quote Request:',
  this.quoteFormData
);


setTimeout(() => {
  this.isSubmitting = false;
  alert(
    'Thank you! Your quote request has been received. The M.U.D Entertainment team will be in touch with you shortly.'
  );
  this.resetQuoteForm();
  this.closeQuoteModal();

}, 1000);
}


resetQuoteForm(): void {

this.quoteFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  eventType: '',
  eventDate: '',
  venue: '',
  guests: null,
  services: [],
  message: ''
 };

}

  menuOpen:boolean = false;


}
