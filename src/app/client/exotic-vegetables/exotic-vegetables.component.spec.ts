/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExoticVegetablesComponent } from './exotic-vegetables.component';

describe('ExoticVegetablesComponent', () => {
  let component: ExoticVegetablesComponent;
  let fixture: ComponentFixture<ExoticVegetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoticVegetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
