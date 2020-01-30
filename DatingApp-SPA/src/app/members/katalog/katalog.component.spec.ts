/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KatalogComponent } from './katalog.component';

describe('KatalogComponent', () => {
  let component: KatalogComponent;
  let fixture: ComponentFixture<KatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
