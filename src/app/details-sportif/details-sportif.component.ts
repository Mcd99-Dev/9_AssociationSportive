import { Component, OnInit } from '@angular/core';
import { Sportif } from '../sportif';
import {Sports}from '../sports';
import { SportifService } from '../sportif.service';
import { ListerSportifComponent } from '../lister-sportif/lister-sportif.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-sportif',
  templateUrl: './details-sportif.component.html',
  styleUrls: ['./details-sportif.component.css']
})
export class DetailsSportifComponent implements OnInit {

  id!: string;
  sportif!: Sportif;

  constructor(private route: ActivatedRoute,private router: Router,
    private sportifService: SportifService) { }

  ngOnInit()  {
    this.sportif = new Sportif();

    this.id = this.route.snapshot.params['id'];
    
    this.sportifService.getSportif(this.id)
      .subscribe(data => {
        console.log(data)
        this.sportif = data;
      }, error => console.log(error));
  }

     list(){
    this.router.navigate(['sportifs']);
  }
}
