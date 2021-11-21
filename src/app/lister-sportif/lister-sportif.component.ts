import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SportifService} from "../sportif.service";
import { Sportif} from "../sportif";
  import { Router } from '@angular/router';


@Component({
  selector: 'app-lister-sportif',
  templateUrl: './lister-sportif.component.html',
  styleUrls: ['./lister-sportif.component.css']
})
export class ListerSportifComponent implements OnInit {

    sportifs: Observable<Sportif[]> | undefined;

  constructor(private sportifService: SportifService,
    private router: Router) { }
  
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.sportifs = this.sportifService.getSportifList();
  }
  deleteSportif(id: string) {
    this.sportifService.deleteSportif(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  sportifDetails(id: string){
    this.router.navigate(['details', id]);
  }
}
