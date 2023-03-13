import React from 'react'

export const ImageSelector = ({ imgWebP, noWebpImg, imageAlt='imagen', fluid }) => {

    let imgFluid

        if (fluid === true) {
            imgFluid = 'img-fluid'
        } else(imgFluid = '')

        const isWebpSupported = () => {
            const elem = document.createElement('canvas');
            return elem.getContext && elem.getContext('2d') ? elem.toDataURL('image/webp').indexOf('data:image/webp') === 0 : false;
        }

    const imgSelected = isWebpSupported() ? (imgWebP)  : noWebpImg;

        return (
            <img src={imgSelected} alt={imageAlt} className={`${imgFluid}`}/>
        )
    
}
