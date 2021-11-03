import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthorCrudComponent } from './author-crud.component';

describe('AuthorCrudComponent', () => {
  let component: AuthorCrudComponent;
  let fixture: ComponentFixture<AuthorCrudComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
