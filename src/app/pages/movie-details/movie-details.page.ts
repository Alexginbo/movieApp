import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from './../../services/movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  film_info = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieServiceService) { }

  ngOnInit() {
    let film_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(film_id).subscribe(
      result => {this.film_info = result;}
    );
  }

}
