import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { LottieView } from 'nativescript-lottie';
import { registerElement } from '@nativescript/angular';
import { Label } from "@nativescript/core";

registerElement('LottieView', () => LottieView);

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ['./items.component.css'],
    moduleId: module.id
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    public loop: boolean = true;
    public src: string;
    public autoPlay: boolean = true;
    public animations: Array<string>;

    private _lottieView: LottieView;

    @ViewChild('win', { read: ElementRef, static: false }) youWinText: ElementRef;
    private youWinTexteLabel: Label;

    constructor(private itemService: ItemService) {
        //   this.animations = [
        //     'lightbulb.json'
        //   ];
        //   this.src = this.animations[0];
    }

    // ngAfterViewIniti

    ngAfterViewInit() {

        console.log('view init...', this.youWinTexteLabel)
        // console.log("afterViewInit switches: ", this.switches.length);

        // if (isAndroid) {
        //     this.switches.forEach(
        //         (item) => {
        //             const nelem = item.nativeElement;
        //             console.log(nelem.android);
        //             console.log(nelem.nativeView);
        //         }
        //     );
        // }
    }

    lottieViewLoaded(event) {

        console.log('loaded! ')
        console.log({ event })

        this._lottieView = <LottieView>event.object;

        this._lottieView.completionBlock = (bool) => {
            console.log('completed', bool);

            console.log('you win: ', this.youWinText);

            // var lbl = <Label>event.view.getViewById("youWinText");

            // console.log('nv: ', this.youWinTexteLabel.nativeView)
            console.log('label: ', this.youWinTexteLabel)

            this.youWinText.nativeElement.animate(
                {
                    opacity: 1,
                    duration: 2000
                }
            )

            // console.log('you win event: ', event);

            // let animation = new Animation([
            //     {
            //         // height: 200,
            //         duration: 2000,
            //         target: this.youWinTexteLabel,
            //         delay: 200
            //     }
            // ])

            // this.youWinText.animate(
            // )

        }

        this._lottieView.playAnimation();
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

}
