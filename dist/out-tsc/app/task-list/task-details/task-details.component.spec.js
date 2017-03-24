import { async, TestBed } from '@angular/core/testing';
import { TaskDetailsComponent } from './task-details.component';
describe('TaskDetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TaskDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TaskDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Projects/authApp2/auth-app2/src/app/task-list/task-details/task-details.component.spec.js.map