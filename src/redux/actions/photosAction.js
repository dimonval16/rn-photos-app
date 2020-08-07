export const GET_All_PHOTOS = 'GET_All_PHOTOS';
export const SET_PHOTO_IN_PHOTOSCREEN = 'SET_PHOTO_IN_PHOTOSCREEN';

export const setPhotoInPhotoScreenAC = (url) => ({
    type: SET_PHOTO_IN_PHOTOSCREEN,
    url,
});

export const getAllPhotosAC = () => (dispatch) => {
    const URL = 'https://api.unsplash.com/photos/';
    const token = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(`${URL}?client_id=${token}`, requestOptions)
        .then((res) => res.json())
        .then((data) => dispatch({ type: GET_All_PHOTOS, data }))
        .catch((error) => console.log('Error', error));
};
