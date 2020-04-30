import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledRasadnikaComponent } from './pregled-rasadnika.component';

describe('PregledRasadnikaComponent', () => {
  let component: PregledRasadnikaComponent;
  let fixture: ComponentFixture<PregledRasadnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledRasadnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledRasadnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
