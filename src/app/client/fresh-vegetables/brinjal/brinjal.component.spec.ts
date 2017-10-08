/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrinjalComponent } from './brinjal.component';

describe('BrinjalComponent', () => {
  let component: BrinjalComponent;
  let fixture: ComponentFixture<BrinjalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrinjalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrinjalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
