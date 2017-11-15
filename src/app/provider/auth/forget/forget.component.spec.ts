import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ForgetComponent } from "./forget.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ForgetComponent", () => {

  let fixture: ComponentFixture<ForgetComponent>;
  let component: ForgetComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ForgetComponent]
    });

    fixture = TestBed.createComponent(ForgetComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
