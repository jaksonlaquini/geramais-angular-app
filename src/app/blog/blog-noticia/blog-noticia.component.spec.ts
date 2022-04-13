import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNoticiaComponent } from './blog-noticia.component';

describe('BlogNoticiaComponent', () => {
  let component: BlogNoticiaComponent;
  let fixture: ComponentFixture<BlogNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
