import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuItems = ['HOME', 'ABOUT', 'ACADEMICS ▼', 'FACULTIES ▼', 'CAMPUS LIFE', 'BLOG', 'PAGES ▼', 'CONTACT US'];

  adresses: adresse[] = [
    { image: '/icons8-adresse-50.png', nom: 'Address', value: '2155 palmer Av, New York' },
    { image: '/icons8-nouveau-message-50.png', nom: 'Email', value: 'hello@univer-site.edu' },
    { image: '/icons8-appel-au-carré-48.png', nom: 'Phone Number', value: '(217)555-0113' }
  ];

}

export interface adresse {
  image: string;
  nom: string;
  value: string;
}
