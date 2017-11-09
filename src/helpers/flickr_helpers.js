export const createFlickrUrlFromObject = (photoObject, size) => {
    switch(size) {
        case 'large': {
            /* Return URL for large sized image */
            return `https://farm${photoObject.farm}.staticflickr.com/${photoObject.server}/${photoObject.id}_${photoObject.secret}_h.jpg`
            break;
        }
        default: {
            /* Return URL for thumbnail sized image */
            return `https://farm${photoObject.farm}.staticflickr.com/${photoObject.server}/${photoObject.id}_${photoObject.secret}_q.jpg`
        }
    }
};