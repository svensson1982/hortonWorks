import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RepoService } from '../../services/repo.service';


@Component({
    selector: 'app-issue',
    templateUrl: './issue.component.html',
    styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
    issues: any = [];

    constructor(private route: ActivatedRoute,
                private repoService: RepoService) {
    }

    ngOnInit() {
        this.route.params.subscribe( (params) => {
            this.repoService.searchIssue(params.name)
                .subscribe((data: any) => {
                    this.issues = data.items;
                    console.log(data);
                });
        } );
    }

}
