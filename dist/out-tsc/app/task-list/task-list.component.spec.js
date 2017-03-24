import { async, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
describe('TaskListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TaskListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TaskListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Projects/authApp2/auth-app2/src/app/task-list/task-list.component.spec.js.map