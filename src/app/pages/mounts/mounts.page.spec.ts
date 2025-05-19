import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MountsPage } from './mounts.page';

describe('MountsPage', () => {
  let component: MountsPage;
  let fixture: ComponentFixture<MountsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
