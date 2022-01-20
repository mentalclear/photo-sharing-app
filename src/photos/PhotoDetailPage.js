import React from "react";
import { useParams } from "react-router-dom";
import { useProtectedResource } from '../data';

export const PhotoDetailPage = () => {
    const { id } = useParams();
    const {
        isLoading,
        data: photo,
        setData: setPhoto,        
    } = useProtectedResource(`/photos/${id}`, {});


    return isLoading 
        ?<p>Loading...</p>
        : (
            <div className="centered-container">
                <h1>{photo.title}</h1>
                <img src={photo.url} width="750"/>
            </div>
        )
}