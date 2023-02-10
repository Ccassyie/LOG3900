import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumScreenComponent } from './album-screen.component';

describe('AlbumScreenComponent', () => {
  let component: AlbumScreenComponent;
  let fixture: ComponentFixture<AlbumScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
