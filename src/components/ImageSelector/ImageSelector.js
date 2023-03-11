import React from 'react'

export const ImageSelector = ({ imgWebP, noWebpImg, imageAlt='imagen' }) => {

    
        const isWebpSupported = () => {
            const elem = document.createElement('canvas');
            return elem.getContext && elem.getContext('2d') ? elem.toDataURL('image/webp').indexOf('data:image/webp') === 0 : false;
        }

    const imgSelected = isWebpSupported() ? (imgWebP)  : noWebpImg;

        return (
            <img src={imgSelected} alt={imageAlt}/>
        )
    
}
