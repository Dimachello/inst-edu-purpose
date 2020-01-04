import shrek from '../imgs/daily-list/Shrek150.jpg';
import audi from '../imgs/daily-list/audi150.jpg';
import bmw from '../imgs/daily-list/bmw150.jpg';
import bmw2 from '../imgs/daily-list/bmw2_150.jpg';

import dog1 from '../imgs/activity-list/dog1_150.jpg';
import dog2 from '../imgs/activity-list/dog2_150.jpeg';
import dog3 from '../imgs/activity-list/dog3_150.jpg';

import bike from '../imgs/recomend/bike1_150.jpg';
import car from '../imgs/recomend/car150.jpeg';


const dailyNick = ['jet.frixon', 'au.of', 'b.m.w', 'nest_gen'];
const dailyName = ['jet', 'audion', 'b.m.w', 'alpha'];
const STATUS = 'Instagram recomended';
const dailyImages = [shrek, audi, bmw,  bmw2];
const dailyItems = Array(4).fill().map((item,idx) => {
        return (
        {
            id: idx,
            profilePhotoUrl:dailyImages[idx],
            nick: dailyNick[idx],
            name: dailyName[idx],
            status: STATUS
        }
        )
});

const activityNick = ['prio', 'lemme', 'nest_gen'];
const activityDate = ['2w', '3w', '4w'];
const activityImages = [dog1, dog2, dog3];
const activityItems = Array(3).fill().map((item,idx) => {
        return (
        {
            id: idx,
            profilePhotoUrl:activityImages[idx],
            nick: activityNick[idx],
            date: activityDate[idx]
        }
        )
});

const recomendNick = ['prio', 'chat', 'nest_gen', 'kreos', 'pios', 'bizon',];
const recomendName = ['alpha', 'rek', 'bizon', 'alp', 'pios', 'prio',]
const recomendImages = [shrek, audi, bmw, bmw2, bike, car];
const recomendItems = Array(6).fill().map((item,idx) => {
        return (
        {
            id: idx,
            profilePhotoUrl:recomendImages[idx],
            nick: recomendNick[idx],
            status: STATUS,
            name: recomendName[idx]
        }
        )
});

const commentsPhrases = [
    'cooool', 'very nice', 'beautiful photos', 'love u', 'great stuf', 'good luck'
];
const commentItems = Array(6).fill().map((item,idx) => {
    return {
        id: idx,
        profilePhotoUrl:recomendImages[idx],
        nick: recomendNick[idx],
        phrase: commentsPhrases[idx]
    }
});

let savedItems = [
    // {url: "https://picsum.photos/id/0/5616/3744"}
    // {url: "https://picsum.photos/id/10/2500/1667"}
];

const initialState = {
    loginConfirmed: false,
    dailyItems: dailyItems,
    activityItems: activityItems,
    recomendationItems: recomendItems,
    commentItems: commentItems,
    savedItems: savedItems
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_CONFIRMED":
            return {...state, loginConfirmed : !state.loginConfirmed};
        case "POST_SAVED":
            return {...state, savedItems: [...state.savedItems,action.payload]};
        default :
            return state;
    }
};

export default reducer;