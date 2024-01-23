import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
 import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { FooterComponent } from "../footer/footer.component";
import { ComoLlegarComponent } from '../como-llegar/como-llegar.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ContactComponent, RouterOutlet, PrincipalComponent, FooterComponent,ComoLlegarComponent]
})
export class HeaderComponent {

}
