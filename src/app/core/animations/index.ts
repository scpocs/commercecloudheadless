import { trigger, style, animate, transition, query, sequence } from '@angular/animations';

export const fadeAnimation = trigger('fade', [

  transition(':enter', [

    style({

      opacity: 0,

    }),
    animate('0.4s', style({

      opacity: 1,

    }))

  ]),
  transition(':leave', [

    animate('0.4s', style({

      opacity: 0,

    }))

  ])

]);

export const transitionLeftAnimation = trigger('transitionLeft', [

  transition(':enter', [

    style({

      opacity: 0,
      transform: 'translateX(-35%)'

    }),
    animate('0.4s', style({

      opacity: 1,
      transform: 'translateX(0%)'

    }))

  ]),
  transition(':leave', [

    animate('0.4s', style({

      opacity: 0,
      transform: 'translateX(-35%)'

    }))

  ])

]);

export const transitionRightAnimation = trigger('transitionRight', [

  transition(':enter', [

    style({

      opacity: 0,
      transform: 'translateX(35%)'

    }),
    animate('0.4s', style({

      opacity: 1,
      transform: 'translateX(0%)'

    }))

  ]),
  transition(':leave', [

    animate('0.4s', style({

      opacity: 0,
      transform: 'translateX(35%)'

    }))

  ])

]);

export const transitionTopAnimation = trigger('transitionTop', [

  transition(':enter', [

    style({

      opacity: 0,
      transform: 'translateY(-35%)'

    }),
    animate('0.4s', style({

      opacity: 1,
      transform: 'translateY(0%)'

    }))

  ]),
  transition(':leave', [

    animate('0.4s', style({

      opacity: 0,
      transform: 'translateY(-35%)'

    }))

  ])

]);

export const dialogOpenCloseAnimation =  trigger('dialogOpenClose', [
    
   
    transition(':enter', [

      style({
      
        height: '100px',
        width: '0px',
        visibility: 'hidden',
        opacity: 0
      
      }),

      sequence([

        query('*', [
        
          style({
          
            opacity: 0
          
          }),
        
        ], { optional: true }),
      
        animate('0.2s', style({

          width: '*',
          visibility: 'visible',
          opacity: 1

        })),

        animate('0.2s', style({

          height: '*',

        })),

        query('*', [
        
          animate('0.2s', style({

            opacity: 1
  
          }))
        
        ], { optional: true }),
      
      ]),

    ]),
    transition(':leave', [
    
      sequence([

        
        query('*', [
        
          animate('0.2s', style({

            opacity: 0
  
          }))
        
        ], { optional: true }),

        animate('0.2s', style({

          height: '100px',

        })),

        animate('0.2s', style({

          width: '0px',
          visibility: 'hidden',
          opacity: 0

        })),

        

        
      
      ]),
    
    ])

]);