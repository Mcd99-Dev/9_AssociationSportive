import { Gymnase } from '../gymnase';
import { Component, OnInit } from '@angular/core';
import { GymnaseService } from '../gymnase.service';
import { ListerGymnaseComponent } from '../lister-gymnase/lister-gymnase.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-gymnase',
  templateUrl: './details-gymnase.component.html',
  styleUrls: ['./details-gymnase.component.css']
})
export class DetailsGymnaseComponent implements OnInit {
 
    id!: string;
    gymnase!: Gymnase;
      
    constructor(private route: ActivatedRoute,private router: Router,
      private gymnaseService: GymnaseService) { }
  
    ngOnInit() {
      this.gymnase = new Gymnase();
  
      this.id = this.route.snapshot.params['id'];
      
      this.gymnaseService.getGymnase(this.id)
        .subscribe(data => {
          console.log(data)
          this.gymnase = data;
        }, error => console.log(error));
    }
  
    list(){
      this.router.navigate(['gymnase']);
    }
  }

