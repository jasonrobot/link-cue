import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    AbstractControl,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

// const urlRegex = require('url-regex');
import urlRegex from 'url-regex';

function isUrlValidator(control: AbstractControl): ValidationErrors | null {
    // const valid = control.value.includes('http') || control.value.includes('www');
    // return !valid ? {invalidUrl: {value: control.value}} : null;
    return urlRegex({exact: true}).test(control.value) ?
        null :
        {invalidUrl: {value: control.value}};
}

@Component({
    selector: 'app-link-input',
    templateUrl: './link-input.component.html',
    styleUrls: ['./link-input.component.scss'],
})
export class LinkInputComponent implements OnInit {
    @Output() newLinkEvent = new EventEmitter<string>();

    link = new FormControl(
        '',
        [
            Validators.required,
            // isUrlValidator
        ]
    );

    constructor() { }

    ngOnInit(): void {
    }

    addNewItem(value: string) {
        this.newLinkEvent.emit(value);
    }
}
