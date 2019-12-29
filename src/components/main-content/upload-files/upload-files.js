import React from 'react';
import './upload-files.css';
import Dock from '../bottom-dock';

const UploadFiles = () => {
    return (
        <div className="upload-files">
            <p>Uploaded files</p>
            <Dock />
        </div>
    )
}

export default UploadFiles;