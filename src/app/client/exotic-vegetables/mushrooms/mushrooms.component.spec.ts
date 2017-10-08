/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MushroomsComponent } from './mushrooms.component';

describe('MushroomsComponent', () => {
  let component: MushroomsComponent;
  let fixture: ComponentFixture<MushroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MushroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
