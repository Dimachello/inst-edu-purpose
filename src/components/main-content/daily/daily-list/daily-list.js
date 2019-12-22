import React from 'react';
import './daily-list.css';
import DailyListItem from '../daily-list-item';

class DailyList extends React.Component {
    render () {
        return (
            <ul className="daily-list">
                <DailyListItem />
            </ul>
        )
    }
}

export default DailyList;