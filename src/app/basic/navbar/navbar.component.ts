import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ti-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @Input() isMobile: boolean | null;
    @Input() isMenuOpen: boolean | null;

    @Output() menuToggled = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void { }

    menuToggle(): void {
        this.menuToggled.next();
    }
}
