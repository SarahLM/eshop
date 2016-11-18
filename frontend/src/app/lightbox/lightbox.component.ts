import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

	public currentText;
	public setText = (text) => {
		if(this.currentText === text) return;
		this.currentText = text;
	}

	constructor() { 
	}

	ngOnInit() {
	}

}
