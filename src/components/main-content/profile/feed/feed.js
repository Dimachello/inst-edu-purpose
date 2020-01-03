import React from 'react'
import EmptyComponent from '../empty-component';
import camera64 from '../../../../imgs/icons/camera64.png';

function Feed () {
    return (
        <EmptyComponent 
        src={camera64}
        title={"Share photo"}
        text={"Your photos will be display here"}
        />
    )
}

export default Feed;