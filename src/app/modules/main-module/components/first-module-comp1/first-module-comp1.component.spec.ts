/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstModuleComp1Component } from './first-module-comp1.component';

describe('FirstModuleComp1Component', () => {
  let component: FirstModuleComp1Component;
  let fixture: ComponentFixture<FirstModuleComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstModuleComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstModuleComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
