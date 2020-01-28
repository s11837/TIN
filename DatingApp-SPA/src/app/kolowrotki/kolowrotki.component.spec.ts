/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KolowrotkiComponent } from './kolowrotki.component';

describe('KolowrotkiComponent', () => {
  let component: KolowrotkiComponent;
  let fixture: ComponentFixture<KolowrotkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolowrotkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolowrotkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
