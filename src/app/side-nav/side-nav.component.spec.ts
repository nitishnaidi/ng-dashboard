import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SideNavComponent } from "./side-nav.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SideNavComponent", () => {

  let fixture: ComponentFixture<SideNavComponent>;
  let component: SideNavComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SideNavComponent]
    });

    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
