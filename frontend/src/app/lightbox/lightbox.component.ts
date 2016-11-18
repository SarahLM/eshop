import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

 	currentText: String = "hi";
    show: boolean = false;

    public clicked = () => {
    	this.show = !this.show;
	}

	constructor() { 
	}

	ngOnInit() {
	}

}
