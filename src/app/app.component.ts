import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Represents the root component of the application.
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet
    ]
})
export class AppComponent {
}
