import { TestBed } from "@angular/core/testing";
import { NewComponent } from './newcomponent.component'

describe('newcomponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NewComponent],
        }).compileComponents();
      });
    });