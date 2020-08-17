import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private callCounter = 0;

    private loadingSubject: Subject<boolean> = new Subject<boolean>();
    public loadingObservable: Observable<boolean> = this.loadingSubject.asObservable();

    public getStatus(): boolean {
        return !!this.callCounter;
    }

    public showLoading() {
        this.callCounter++;
        console.log('show:loading-counter', this.callCounter);
        this.loadingSubject.next(true);
    }

    public hideLoading() {
        this.callCounter = this.callCounter > 0 ? this.callCounter - 1 : 0;
        console.log('hide:loading-counter', this.callCounter);

        if (this.callCounter === 0) {
            this.loadingSubject.next(false);
        }
    }
}
