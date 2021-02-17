import { Injectable } from '@angular/core';
import { Article } from './articles';

const All_ARTICLES: Article[] = [
  {id: 1, name: 'Angular 2 Tutorial', position: 'Angular', date: '2021-04-09', action:''},
  {id: 2, name: 'Angular 6 Tutorial', position: 'Angular', date: '2021-04-09', action:''},
  {id: 3, name: 'Spring MVC tutorial', position: 'Spring', date: '2021-04-09', action:''},
  {id: 4, name: 'Spring Boot tutorial', position: 'Spring', date: '2021-04-09', action:''},
  {id: 5, name: 'FreeMarker Tutorial', position: 'FreeMarker', date: '2021-04-09', action:''},
  {id: 6, name: 'Thymeleaf Tutorial', position: 'Thymeleaf', date: '2021-04-09', action:''},
  {id: 7, name: 'Java 8 Tutorial', position: 'Java', date: '2021-04-09', action:''},
  {id: 8, name: 'Java 9 Tutorial', position: 'Java', date: '2021-04-09', action:''}
];

@Injectable({
   providedIn: 'root'
})
export class ArticlesService {
   getAllArticles() {
       return All_ARTICLES;
   }
}