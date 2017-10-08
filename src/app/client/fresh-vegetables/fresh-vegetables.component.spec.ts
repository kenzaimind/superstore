/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FreshVegetablesComponent } from './fresh-vegetables.component';

describe('FreshVegetablesComponent', () => {
  let component: FreshVegetablesComponent;
  let fixture: ComponentFixture<FreshVegetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshVegetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
