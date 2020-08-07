import { SET_PHOTO_IN_PHOTOSCREEN } from '../actions/photosAction';

const initialState = {
    photoUrl: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTO_IN_PHOTOSCREEN: {
            return {
                ...state,
                photoUrl: action.url,
            };
        }

        default: {
            return state;
        }
    }
};

export default reducer;
