import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingverificationComponent } from './pendingverification.component';

describe('PendingverificationComponent', () => {
  let component: PendingverificationComponent;
  let fixture: ComponentFixture<PendingverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingverificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PendingverificationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'smart-table-functionalities'`, () => {
    const fixture = TestBed.createComponent(PendingverificationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('smart-table-functionalities');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PendingverificationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('smart-table-functionalities app is running!');
  });
});
