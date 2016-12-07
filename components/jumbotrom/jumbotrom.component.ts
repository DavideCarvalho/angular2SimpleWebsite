import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jumbotrom',
    templateUrl: './jumbotrom.component.html',
    styleUrls: ['./jumbotrom.component.css']
})
export class JumbotromComponent implements OnInit {

    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;

    constructor() {
        this.jbtHeading = "Hello World";
        this.jbtText = "This is a simple hero unit, a simple jumbotrom-style component for calling extra attention to featured content or information";
        this.jbtBtnText = "Read More";
        this.jbtBtnUrl = "/about";
    }

    ngOnInit() {
    }

}
