import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../services/cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
})
export class MyHomeComponent implements OnInit {
  films = [];

  constructor(private theMovie: CinemaService) { }

  ngOnInit() {
    this.films = this.theMovie.getMovies();
  }

}


