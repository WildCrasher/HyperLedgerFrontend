import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThesisDto } from '../shared/dtos/thesis.dto';
import { ThesisService } from '../shared/services/thesis.service';

@Component({
    selector: 'app-theses-list',
    templateUrl: './theses-list.component.html',
    styleUrls: ['./theses-list.component.scss']
})
export class ThesesListComponent implements OnInit {

    theses: ThesisDto[] = null;
    //[
    //     {
    //         'thesisNumber': 1,
    //         'topic': "aaaa  vvv vvv",
    //         'issueDateTime': '111111',
    //         'state': 'free',
    //         'student': 'brak',
    //         'supervisor': 'promotor 1'
    //     },
    //     {
    //         'thesisNumber': 2,
    //         'topic': "aaaa  vvv vvv222222sssssssssssssssssssssssssssssssssss",
    //         'issueDateTime': '111111',
    //         'state': 'free',
    //         'student': 'brak',
    //         'supervisor': 'promotor 2'
    //     },
    //     {
    //         'thesisNumber': 3,
    //         'topic': "aaaa  vvv vvv3333333",
    //         'issueDateTime': '111111',
    //         'state': 'Reserved',
    //         'student': 'Marcin Staszek',
    //         'supervisor': 'promotor 3'
    //     }
    // ];

    constructor(
        private thesisService: ThesisService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.thesisService.getTheses().subscribe((res) => {
            this.theses = res;
        });
    }

    onThesisDetails(thesisNumber: string) {
        this.router.navigate([`/thesis-details/${thesisNumber}`]);
    }
}
