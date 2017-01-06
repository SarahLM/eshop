import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    public show = false;

  	ngOnInit() {

  	}

  showLightbox1() {
   //show box msg
   this.show = true;
  }
  
}
