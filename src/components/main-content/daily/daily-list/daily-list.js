import React from 'react';
import './daily-list.css';
import DailyListItem from '../daily-list-item';
import { connect } from 'react-redux';

class DailyList extends React.Component {

    showItems () {
        const { dailyItems } = this.props;

        const items = dailyItems.map((item) => {
           return (
               <DailyListItem
                key={item.id} 
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

const mapStateToProps = (state) => {
    return {
        dailyItems: state.dailyItems
    }
}

export default connect(mapStateToProps)(DailyList);