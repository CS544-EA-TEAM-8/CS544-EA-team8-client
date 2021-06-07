import { trigger, transition, style, animate } from "@angular/animations";

export const fold = trigger('fold', [
    transition(':enter', [style({ height: 0 }), animate('.15s ease-out', style({ height: '*' }))]),
    transition(':leave', [style({ height: '*' }), animate('.15s ease-in', style({ height: 0 }))])
]);