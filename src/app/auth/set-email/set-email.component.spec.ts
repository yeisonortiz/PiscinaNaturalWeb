import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEmailComponent } from './set-email.component';

describe('SetEmailComponent', () => {
  let component: SetEmailComponent;
  let fixture: ComponentFixture<SetEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
