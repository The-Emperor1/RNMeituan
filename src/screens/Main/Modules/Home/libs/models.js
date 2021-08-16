import { fetchFeatures } from './api'

export const home = {
    state: {
        features:[
            {
                name: 'TackOut',
                title: '外卖',
                icon: '\ue8c9',
            },
            {
                name: 'Food',
                title: '美食',
                icon: '\ue8c6',
            },
            {
                name: 'Hotel',
                title: '酒店/民宿',
                icon: '\ue687',
            },
            {
                name: 'Entertainment',
                title: '休闲/玩乐',
                icon: '\ue616',
            },
            {
                name: 'Movie',
                title: '电影/演出',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '打车',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '美团买菜',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '超市/便利店',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '买药',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '火车票/机票',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '美团优选',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '免费领水果',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '天天现金券',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '医疗/牙科',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '跑腿',
                icon: '',
            },
            {
                name: 'TackOut',
                title: '按摩/足疗',
                icon: '',
            },
            
        ],  // 功能点
    },
    reducers: {
        SET_FEATURES(state, features) {
            debugger
            return {...state, features};
        }
    },
    effects: (dispatch) => ({
        async fetchFeatures(payload, rootState) {
            const res = await fetchFeatures(payload);
            const {
                code, 
                data,
            } = res;
            dispatch.root.SET_FEATURES(data);
        },
    }),
};