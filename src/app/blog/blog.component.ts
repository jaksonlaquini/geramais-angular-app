import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../core/services/blog.service';
import { BlogNoticia } from '../projetos/model/blogNoticia';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  listaBlog: BlogNoticia[] = [];
  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit(): void {
    this.buscarBlog();
  }

  abrirNoticia(idBlog: string): void {
    this.router.navigate(['/blog-noticia', idBlog]);
  }

  private async buscarBlog(): Promise<void> {
    const result = await this.blogService.getBlog().then();

    if (result) {
      this.listaBlog = result.map((x) => x);
    }
  }
}
