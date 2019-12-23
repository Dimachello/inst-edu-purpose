import React from 'react';
import './daily-list.css';
import DailyListItem from '../daily-list-item';
import data from '../../../test-data';

class DailyList extends React.Component {

    showItems () {
        const items = data.map((item) => {
           return (
               <DailyListItem 
                profilePhotoUrl={item.profilePhotoUrl}
                nick={item.nick}
                name={item.name}
                status={item.status}
               />
           )
        });
        return items;
    }

    render () {

        const items = this.showItems();

        return (
            <ul className="daily-list">
               {[...items]}
            </ul>
        )
    }
}

export default DailyList;