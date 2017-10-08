/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CabbageComponent } from './cabbage.component';

describe('CabbageComponent', () => {
  let component: CabbageComponent;
  let fixture: ComponentFixture<CabbageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabbageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabbageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
