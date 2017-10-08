/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MidpageComponent } from './midpage.component';

describe('MidpageComponent', () => {
  let component: MidpageComponent;
  let fixture: ComponentFixture<MidpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
