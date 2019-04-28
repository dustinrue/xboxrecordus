import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlookupComponent } from './userlookup.component';

describe('UserlookupComponent', () => {
  let component: UserlookupComponent;
  let fixture: ComponentFixture<UserlookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
