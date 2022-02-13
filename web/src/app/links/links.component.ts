import { Component, OnInit } from '@angular/core';

import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

    links: Array<string> = [];

    constructor() { }

    ngOnInit(): void {
    }

    addLink(value: string) {
        if (/^https?:\/\//g.test(value) === false) {
            value = 'https://' + value
        }
        this.links.push(value)
    }

    removeLink() {
        requestAnimationFrame(() => {
            this.links.pop()
        })
    }
}
