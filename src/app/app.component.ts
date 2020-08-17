import { Component, Renderer2, OnInit } from '@angular/core';

import { LoadingService } from './core/services/loading.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private destroy$ = new Subject<boolean>();
    private focusedElement = null;

    constructor(private loadingService: LoadingService, private renderer: Renderer2) { }

    ngOnInit() {
        this.handleLoadingSpinner();
    }

    private handleLoadingSpinner(): void {
        this.loadingService.loadingObservable
            .pipe(takeUntil(this.destroy$))
            .subscribe((status: boolean) => {
                if (status) {
                    this.focusedElement = null;
                    if (document.activeElement) {
                        this.focusedElement = document.activeElement;
                        (this.focusedElement as HTMLElement).blur();
                    }

                    this.renderer.addClass(document.body, 'loading');
                } else {
                    this.renderer.removeClass(document.body, 'loading');
                }
            });
        if (!this.loadingService.getStatus() && document.body.classList.contains('loading')) {
            this.loadingService.hideLoading();
        }
    }
}
