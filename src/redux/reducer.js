import shrek from '../imgs/daily-list/Shrek150.jpg';
import audi from '../imgs/daily-list/audi150.jpg';
import bmw from '../imgs/daily-list/bmw150.jpg';
import bmw2 from '../imgs/daily-list/bmw2_150.jpg';

import dog1 from '../imgs/activity-list/dog1_150.jpg';
import dog2 from '../imgs/activity-list/dog2_150.jpeg';
import dog3 from '../imgs/activity-list/dog3_150.jpg';

import bike from '../imgs/recomend/bike1_150.jpg';
import car from '../imgs/recomend/car150.jpeg';

const initialState = {
    dailyItems: [
        {
            id:1,
            profilePhotoUrl: shrek,
            nick: 'jet.frixon',
            name: 'jet',
            // advPhoto: []
            status: 'Instagram recomended'
        },
        {
            id:2,
            profilePhotoUrl: audi,
            nick: 'au.of',
            name: 'audion',
            // advPhoto: []
            status: 'Instagram recomended'
        },
        {
            id:3,
            profilePhotoUrl: bmw,
            nick: 'b.m.w',
            name: 'beta',
            // advPhoto: []
            status: 'Instagram recomended'
        },
        {
            id:4,
            profilePhotoUrl: bmw2,
            nick: 'nest_gen',
            name: 'alpha',
            // advPhoto: []
            status: 'Instagram recomended'
        }
    ],
    activityItems: [
        {
            id:1,
            profilePhotoUrl: dog1,
            nick: 'prio',
            date: '2w'
        },
        {
            id:2,
            profilePhotoUrl: dog2,
            nick: 'lemme',
            date: '3w'
        },
        {
            id:3,
            profilePhotoUrl: dog3,
            nick: 'nest_gen',
            date: '4w'
        }
    ],
    recomendationItems: [
        {
            id:1,
            profilePhotoUrl: shrek,
            name: 'alpha',
            nick: 'prio',
            status: 'Instagram recomended'
        },
        {
            id:2,
            profilePhotoUrl: audi,
            name: 'rek',
            nick: 'chat',
            status: 'Instagram recomended'
        },
        {
            id:3,
            profilePhotoUrl: bmw,
            name: 'bizon',
            nick: 'kreos',
            status: 'Instagram recomended'
        },
        {
            id:4,
            profilePhotoUrl: bmw2,
            name: 'alp',
            nick: 'pret',
            status: 'Instagram recomended'
        },
        {
            id:5,
            profilePhotoUrl: bike,
            name: 'pios',
            nick: 'krud',
            status: 'Instagram recomended'
        },
        {
            id:6,
            profilePhotoUrl: car,
            name: 'alpha',
            nick: 'prio',
            status: 'Instagram recomended'
        },
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case "DAILY_ITEMS_LOADED":
          return 1;
      default :
          return state;
    }
};

export default reducer;