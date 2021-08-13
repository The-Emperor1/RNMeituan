import { fetchPosition } from './api'

export const root = {
    state: {
        position: {},  // 定位
    },
    reducers: {
        SET_POSITION(state, position) {
            return {...state, position};
        }
    },
    effects: (dispatch) => ({
        async fetchPosition(payload, rootState) {
            const res = await fetchPosition(payload);
            const {
                code, 
                data,
            } = res;
            dispatch.root.SET_POSITION(data);
        },
    }),
};