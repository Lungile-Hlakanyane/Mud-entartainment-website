import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-experiences',
  styleUrl: './experiences.scss',
  templateUrl: './experiences.html',
})
export class Experiences {
  
 activeTab: 'halloween' | 'redcarpet' = 'halloween'; 

 selectedImage: string | null = null; 

 selectedImageTitle = ''; 

 selectTab( tab: 'halloween' | 'redcarpet' ): void { 
  this.activeTab = tab; 
 }


openImage( image: string, title: string ): void { 
  this.selectedImage = image; 
  this.selectedImageTitle = title;
  document.body.style.overflow = 'hidden';

 } 

 closeImage(): void { 
  this.selectedImage = null; 
  this.selectedImageTitle = ''; 
  document.body.style.overflow = ''; 
 } 
 

 @HostListener('document:keydown.escape') handleEscapeKey(): void { 
  if (this.selectedImage) {
   this.closeImage(); 
  } 
 }
}
