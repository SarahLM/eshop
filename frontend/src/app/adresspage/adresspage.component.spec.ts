/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdresspageComponent } from './adresspage.component';

describe('AdresspageComponent', () => {
  let component: AdresspageComponent;
  let fixture: ComponentFixture<AdresspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
