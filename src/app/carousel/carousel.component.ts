import { Component, ViewChild ,OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = [
    {src:"https://www.elfilahaexpo.com/wp-content/uploads/2017/03/Agriculture_Portfolio_Leica_Geosystems_1766x750.jpg" ,title:"Pour Une Forte Economie"},
    {src:"https://www.realites.com.tn/wp-content/uploads/2016/03/agriculture.jpg" , title:"Pour encourager Les Jeunes Agriculteurs"},
    {src:"https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/78618942_737321143430904_2463491248397221888_n.jpg?_nc_cat=103&_nc_ohc=QBvXnE5qnIkAQlBlUqSF2f7sKP66B-82Dybcdh1gdZbhFkmihWwgQ7EyQ&_nc_ht=scontent.ftun10-1.fna&oh=94a3b761fae708518d33242ccdef6919&oe=5E7D896F",title:"Pour Une Agriculture Intelligente"},
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }


}



