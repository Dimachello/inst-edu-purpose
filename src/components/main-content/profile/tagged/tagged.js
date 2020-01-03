import React from 'react';
import EmptyComponent from '../empty-component';
import contact64 from '../../../../imgs/icons/contact64.png';

function Tagged () {
    return (
        <EmptyComponent 
        src={contact64}
        title={"Photos with you"}
        text={"Photos tagged by you display here"}
        />
    )
}

export default Tagged;