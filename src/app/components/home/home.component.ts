import { Component, OnInit } from '@angular/core';

import { RepoService } from '../../services/repo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    detailsData: any = {};
    searchResult = [];
    searchForm: FormGroup;

    constructor(private repoService: RepoService) {
    }

    ngOnInit() {
        this.searchForm = new FormGroup({
            'searchElement': new FormControl(null, Validators.required)
        });
    }

    /**
     * Search repository by name
     */
    searchRepo() {
        this.repoService.searchRepo(this.searchForm.value.searchElement)
            .subscribe((data: any) => {
                this.searchResult = data.items;
            });
    }

    /**
     * Add result data to div
     * @param item
     */
    addData(item: any) {
        this.detailsData = item;
        console.log(this.detailsData);
    }
}
