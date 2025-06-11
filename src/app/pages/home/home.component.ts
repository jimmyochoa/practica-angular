import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services = [
    {
      icon: 'bi-egg-fried',
      title: 'Cocina Gourmet',
      description: 'Platos elaborados con ingredientes frescos y recetas tradicionales.'
    },
    {
      icon: 'bi-people',
      title: 'Ambiente Familiar',
      description: 'Un lugar cómodo y acogedor para compartir con familiares y amigos.'
    },
    {
      icon: 'bi-clock',
      title: 'Servicio Rápido',
      description: 'Atención eficiente para que disfrutes sin largas esperas.'
    }
  ];
}
