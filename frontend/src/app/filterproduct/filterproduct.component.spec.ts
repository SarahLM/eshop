/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilterproductComponent } from './filterproduct.component';

describe('FilterproductComponent', () => {
  let component: FilterproductComponent;
  let fixture: ComponentFixture<FilterproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
