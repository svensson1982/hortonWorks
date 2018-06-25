import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RepoService } from '../../services/repo.service';


@Component({
    selector: 'app-issue',
    templateUrl: './issue.component.html',
    styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
    issues: any = [];

    constructor(private location: Location,
                private route: ActivatedRoute,
                private repoService: RepoService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.repoService.searchIssue(params.name)
                .subscribe((data: any) => {
                    this.issues = data.items;
                });
        });
    }

    /**
     * Back to the previous page
     */
    backClicked() {
        this.location.back();
    }

}
