import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketGroupFormComponent } from './market-group-form.component';

describe('MarketGroupFormComponent', () => {
  let component: MarketGroupFormComponent;
  let fixture: ComponentFixture<MarketGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
