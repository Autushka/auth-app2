import { async, TestBed } from '@angular/core/testing';
import { TaskListItemComponent } from './task-list-item.component';
describe('TaskListItemComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TaskListItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TaskListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Projects/authApp2/auth-app2/src/app/task-list/task-list-item/task-list-item.component.spec.js.map