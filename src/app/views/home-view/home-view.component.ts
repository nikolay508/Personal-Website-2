import { Component } from '@angular/core';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

  scrollDown(event: Event){
    event.preventDefault();

    window.scrollBy(0, 840)
  }
}
