import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { provideRoutes} from '@angular/router';
import { RouterOutlet } from '@angular/router';

//----------------------------------------------
//----------Code d'origine ---------------------
//----------------------------------------------
//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
//})
//-----------------------------------------------


//------------------------------------------------
//------on utilise un objet router a la place-----
//------------------------------------------------

@Component({
 selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})


export class AppComponent {
  title = 'app';
}
