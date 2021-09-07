import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  mobile = faPhone;
  envelope = faEnvelope;
  marker = faMapMarkerAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
