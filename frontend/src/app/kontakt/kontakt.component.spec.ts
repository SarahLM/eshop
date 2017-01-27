/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KontaktComponent } from './kontakt.component';

describe('KontaktComponent', () => {
  let component: KontaktComponent;
  let fixture: ComponentFixture<KontaktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
