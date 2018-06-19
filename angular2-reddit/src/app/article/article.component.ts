import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'] ,
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  voteUp(): boolean {
    this.article.voteUp();
    // 告诉浏览器不要向上冒泡
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    // 告诉浏览器不要向上冒泡
    return false;
  }

  ngOnInit() {
  }

}
