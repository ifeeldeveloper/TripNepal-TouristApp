import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { AboutComponent } from "../about/about.component";
import { DestinationComponent } from "../destination/destination.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [FooterComponent, AboutComponent, DestinationComponent]
})
export class HomeComponent {

}
