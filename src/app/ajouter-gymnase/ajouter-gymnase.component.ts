import { Component, OnInit } from '@angular/core';
import { DetailsGymnaseComponent } from '../details-gymnase/details-gymnase.component';
import { Observable } from 'rxjs';
import { GymnaseService } from "../gymnase.service";
import { Gymnase } from '../gymnase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-gymnase',
  templateUrl: './ajouter-gymnase.component.html',
  styleUrls: ['./ajouter-gymnase.component.css']
})
export class AjouterGymnaseComponent implements OnInit {

  gymnase: Gymnase = new Gymnase();
  submitted = false;


constructor(private gymnaseService: GymnaseService,
  private router: Router) { }

ngOnInit() {
}

 
  newGymnase(): void {
    this.submitted = false;
    this.gymnase = new Gymnase();
  }

//   save() {
//     this.gymnaseService.createGymnase(this.gymnase)
//       .subscribe(data => console.log(data), error => console.log(error));
//     this.gymnase = new Gymnase();
//     this.gotoList();
//   }

//   onSubmit() {
//     this.submitted = true;
//     this.save();    
//   }

  gotoList() {
    this.router.navigate(['/gymnases']);
  }
}