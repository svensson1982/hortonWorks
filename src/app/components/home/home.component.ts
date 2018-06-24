import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Chart } from 'angular-highcharts';
import { RepoService } from '../../services/repo.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    chart: any;
    searchResult = [];
    detailsData: any = {};
    searchForm: FormGroup;
    visibleChart: boolean;

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
        this.visibleChart = false;
        this.detailsData = item;
    }

    /**
     * highChart
     */
    showChart(repoData) {
        this.visibleChart = true;
        this.chart = new Chart({
            chart: {
                type: 'column'
            },
            title: {
                text: repoData.full_name + ' chart'
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Forks',
                    data: [repoData.forks]
                }, {
                    name: 'Open issues',
                    data: [repoData.open_issues]
                }, {
                    name: 'Stargazers',
                    data: [repoData.stargazers_count]
                }, {
                    name: 'Watchers',
                    data: [repoData.watchers_count]
                }, {
                    name: 'Score',
                    data: [repoData.score]
                }, {
                    name: 'Size',
                    data: [repoData.size]
                }
            ]
        });
    }
}
