import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PackagaesComponent } from './packagaes-component';

describe('PackagaesComponent', () => {
  let component: PackagaesComponent;
  let fixture: ComponentFixture<PackagaesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagaesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PackagaesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
