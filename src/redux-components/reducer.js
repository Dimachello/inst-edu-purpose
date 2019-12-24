import shrek from '../imgs/daily-list/Shrek150.jpg';
import audi from '../imgs/daily-list/audi150.jpg';
import bmw from '../imgs/daily-list/bmw150.jpg';
import bmw2 from '../imgs/daily-list/bmw2_150.jpg';

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