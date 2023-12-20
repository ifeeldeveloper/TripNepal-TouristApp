import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterLink, RouterLinkActive, FooterComponent]
})
export class HeaderComponent {

}
