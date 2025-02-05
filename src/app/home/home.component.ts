import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { IMovie } from '../imovie';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  imports: [ RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy {
   private readonly movie= inject(MoviesApiService)
    movies:IMovie[]=[];
    mainSrc:string="https://image.tmdb.org/t/p/original";

    submovie:any;
   ngOnInit(): void {
      this.submovie =  this.movie.getMovies().subscribe({
        next:(data) => {
         this.movies = data.results
         console.log(this.movies)
        }
       })   
      
   }
   
   ngOnDestroy(): void {
       this.submovie.unsubscribe();
   }
   
}
