import { trigger, style, transition, animate } from '@angular/animations';

export const Animations = {
  fadeInOut: trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.3s', style({ opacity: 1 })),
    ]),
    transition(':leave', [animate('0.3s', style({ opacity: 0 }))]),
  ]),
};
