import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';
import { DetailsPage } from './details/details.page';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent,],
      providers: [provideRouter([
        { path: '', component: HomePage },
        { path: 'detalhes/:id', component: DetailsPage }
      ])]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
