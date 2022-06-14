import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/core/services/blog.service';
import { BlogNoticiaCompleta } from 'src/app/projetos/model/blogNoticia';

@Component({
  selector: 'blog-noticia',
  templateUrl: './blog-noticia.component.html',
  styleUrls: ['./blog-noticia.component.css'],
})
export class BlogNoticiaComponent implements OnInit {
  blogCompleto: BlogNoticiaCompleta = new BlogNoticiaCompleta();
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const idBlog = this.route.snapshot.paramMap.get('idBlog');

    if (idBlog) {
      this.consultarBlogNoticia(idBlog);
    }
  }

  private consultarBlogNoticia(idBlog: string): void {
    this.blogService.getBlogNoticiaCompleta(idBlog).then((x) => {
      this.blogCompleto = x[0];
    });

    //   if (result) {
    //     this.blogCompleto = result.;
    //   }
  }
}
