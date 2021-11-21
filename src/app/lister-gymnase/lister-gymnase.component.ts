
import { DetailsGymnaseComponent } from '../details-gymnase/details-gymnase.component';
import { Observable } from 'rxjs';
import { GymnaseService } from "../gymnase.service";
import { Gymnase } from '../gymnase';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-gymnase',
  templateUrl: './lister-gymnase.component.html',
  styleUrls: ['./lister-gymnase.component.css']
})
export class ListerGymnaseComponent implements OnInit {

  gymnases: Observable<Gymnase[]> | undefined;

  constructor(private gymnaseService: GymnaseService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.gymnases = this.gymnaseService.getGymnaseList();
  }
  deleteGymnase(id: string) {
    this.gymnaseService.deleteGymnase(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  gymnaseDetails(id: string){
    this.router.navigate(['gymnase', id]);
  }
}

