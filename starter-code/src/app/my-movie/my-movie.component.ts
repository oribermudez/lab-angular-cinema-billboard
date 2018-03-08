import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../services/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
})
export class MyMovieComponent implements OnInit {
  film = {};
  constructor(private theFilm: CinemaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.film = this.theFilm.getMovie(params['id']));
      console.log(this.film);
  }

}


