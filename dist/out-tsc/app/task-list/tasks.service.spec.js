import { TestBed, inject } from '@angular/core/testing';
import { TasksService } from './tasks.service';
describe('TasksService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [TasksService]
        });
    });
    it('should ...', inject([TasksService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=C:/Projects/authApp2/auth-app2/src/app/task-list/tasks.service.spec.js.map