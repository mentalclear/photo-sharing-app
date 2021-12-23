import React from 'react';
import { Link } from 'react-router-dom';

export const NewPhotoButton = () => {
    return (
        <Link className='link' to='/upload-photo'>
            <div className='new-photo-button'>
                <p className='plus-sign'>+</p>
            </div>
        </Link>
    )
}