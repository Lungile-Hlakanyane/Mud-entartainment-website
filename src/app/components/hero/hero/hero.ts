import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuoteFormData } from '../../../models/QuoteFormData.model';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [FormsModule],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {

 private readonly formspreeUrl = 'https://formspree.io/f/xwlkdyyp';

 quoteModalOpen = false;
 isSubmitting = false;

 constructor(private http:HttpClient){}

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
    if (this.isSubmitting) {
      return;
    }
    this.isSubmitting = true;
    const formData = {
      name: this.quoteFormData.name,
      email: this.quoteFormData.email,
      phone: this.quoteFormData.phone,
      company: this.quoteFormData.company,
      eventType: this.quoteFormData.eventType,
      eventDate: this.quoteFormData.eventDate,
      venue: this.quoteFormData.venue,
      guests: this.quoteFormData.guests,
      services: this.quoteFormData.services.join(', '),
      message: this.quoteFormData.message,
      subject:
        `M.U.D Entertainment Quote Request - ${this.quoteFormData.name}`
    };
    this.http.post(
      this.formspreeUrl,
      formData,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    ).subscribe({
      next: () => {
        this.isSubmitting = false;
        alert(
          'Thank you! Your quote request has been sent successfully. The M.U.D Entertainment team will be in touch with you shortly.'
        );
        this.resetQuoteForm();
        this.closeQuoteModal();
      },
      error: (error) => {
        console.error(
          'Formspree submission error:',
          error
        );
        this.isSubmitting = false;
        alert(
          'Sorry, we could not send your quote request. Please try again or contact M.U.D Entertainment directly.'
       );
      }
    });
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
