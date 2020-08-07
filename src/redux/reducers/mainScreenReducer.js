import { GET_All_PHOTOS } from '../actions/photosAction';

const initialState = {
    photosArr: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_All_PHOTOS: {
            return {
                ...state,
                photosArr: action.data,
            };
        }

        default: {
            return state;
        }
    }
};

export default reducer;
