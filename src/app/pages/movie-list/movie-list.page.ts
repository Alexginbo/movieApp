import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieServiceService } from './../../services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
  }

  searchChanged(){
    this.results = this.movieService.searchMovie(this.searchTerm);
  }

}
