import { trigger, state, animate, style, transition } from '@angular/core';

export function popup(inTime: number = 150, outTime: number = 150) {
    return trigger('popup', [
        state('in', style({
            opacity: 1
        })),
        transition('void => *', [
            style({
                opacity: 0,
            }),
            animate(inTime)
        ]),
        transition('* => void', [
            animate(outTime, style({
                opacity: 0
            }))
        ])
    ]);
}