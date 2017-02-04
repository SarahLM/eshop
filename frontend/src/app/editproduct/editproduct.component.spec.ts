/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { editproductComponent } from './editproduct.component';

describe('editproductComponent', () => {
  let component: editproductComponent;
  let fixture: ComponentFixture<editproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ editproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(editproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
