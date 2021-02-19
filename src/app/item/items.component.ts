import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { LottieView } from 'nativescript-lottie';
import { registerElement } from '@nativescript/angular';
import { Label, Enums } from "@nativescript/core";

registerElement('LottieView', () => LottieView);

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ['./items.component.css'],
    moduleId: module.id
})
export class ItemsComponent {

    public loop: boolean = true;
    public src: string;
    public autoPlay: boolean = true;
    public animations: Array<string>;
    private _lottieView: LottieView;

    @ViewChild('win', { read: ElementRef, static: false }) youWinText: ElementRef;
    private youWinTexteLabel: Label;

    constructor() { }

    ngAfterViewInit() {
        console.log('view init...', this.youWinTexteLabel)
    }

    lottieViewLoaded(event) {

        console.log('loaded! ')
        console.log({ event })

        this._lottieView = <LottieView>event.object;

        this._lottieView.completionBlock = (bool) => {
            console.log('completed', bool);
            console.log('you win: ', this.youWinText);
            console.log('label: ', this.youWinTexteLabel)

            this.youWinText.nativeElement.animate({
                opacity: 1,
                duration: 900,
                delay: 50,
                curve: Enums.AnimationCurve.easeInOut
            })
                .then(() => {
                    this.youWinText.nativeElement.animate({
                        scale: { x: 1.27, y: 1.27 },
                        delay: 70,
                        duration: 450,
                        curve: Enums.AnimationCurve.easeInOut
                    })
                        .then(() => {
                            this.youWinText.nativeElement.animate({
                                scale: { x: 1, y: 1 },
                                delay: 30,
                                duration: 450,
                                curve: Enums.AnimationCurve.easeIn
                            })
                        })
                })

        }

        this._lottieView.playAnimation();
    }

}
