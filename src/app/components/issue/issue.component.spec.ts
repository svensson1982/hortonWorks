import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IssueComponent } from './issue.component';
import { RepoService } from '../../services/repo.service';

describe('IssueComponent', () => {
    let component: IssueComponent;
    let fixture: ComponentFixture<IssueComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IssueComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            providers: [RepoService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IssueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
