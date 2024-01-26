import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl:   './footer.component.css'  
})
export class FooterComponent {
  enviarMensaje() {
    // Número de teléfono y mensaje predeterminado
    const numeroTelefono = '+5492235443274'; // Reemplaza con tu número de teléfono
    const mensaje = 'Hola, estoy interesado en averiguar por la estadía';

    // Construir el enlace de WhatsApp con el mensaje
    const enlaceWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + encodeURIComponent(mensaje);

    // Redirigir a la página de WhatsApp
    window.location.href = enlaceWhatsApp;
  }
  
}
