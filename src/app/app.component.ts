import { Component,OnInit} from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
mySnap!:FaceSnap;
myotherSnap!:FaceSnap;
mylastSnap!:FaceSnap;
ngOnInit(){
  this.mySnap = {
  title: 'Archibald',
  description: 'Mon meilleur ami depuis tout petit !',
   createdDate: new Date(),
  imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  location: 'Paris',
   snaps: 0  
  };
  this.myotherSnap = {
    title: 'BreakFast',
    description: 'This easy breakfast board with bacon, eggs and fresh fruit is the perfect fuss-free, versatile ...',
    createdDate:  new Date(),
    imageUrl: 'https://simply-delicious-food.com/wp-content/uploads/2018/10/breakfast-board-2.jpg',
    location:'New York',
    snaps:  0 
    

  };
    this.mylastSnap = {
      title: 'Progammation',
      description: 'Best Language for mobile App Development ',
      createdDate:  new Date(),
      imageUrl: 'https://www.webiotic.com/wp-content/uploads/Best-Programming-Language-Header-Webiotic.jpg',
      snaps:  0 ,
    };
}
}
