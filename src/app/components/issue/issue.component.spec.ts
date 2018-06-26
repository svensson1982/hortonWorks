import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IssueComponent } from './issue.component';
import { RepoService } from '../../services/repo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

describe('IssueComponent', () => {
    let testData;
    let routeStub;
    let component: IssueComponent;
    let fixture: ComponentFixture<IssueComponent>;

    beforeEach(async(() => {
        routeStub = {
            data: null
        };

        testData = {
            avatar_url: 'https://secure.i.telegraph.co.uk/multimedia/archive/02460/avatar1small_2460564a.jpg',
            title: 'some issue title',
            body: 'some issue body',
            html_url: 'https://github.com/bestmomo/laravel5-example/issues/80',
            state: 'closed',
            comments: 10,
            created_at: 'Saturday, May 26, 2018',
            updated_at: 'Saturday, May 26, 2018',
        };

        TestBed.configureTestingModule({
            declarations: [IssueComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            providers: [
                RepoService,
                {
                    provide: ActivatedRoute, useValue: {
                        data: Observable.of({issueData: {items: testData}})
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IssueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should assign name when route is resolved', fakeAsync(() => {
        routeStub.data = Observable.of({issueData: {items: testData}});

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(routeStub.data.value.issueData.items).toEqual(testData);
        });
    }));
});
