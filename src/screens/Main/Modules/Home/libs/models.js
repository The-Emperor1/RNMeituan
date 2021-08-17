import { fetchFeatures } from './api'

export const home = {
    state: {
        features:[
            {
                name: 'TackOut',
                title: '外卖',
                iconName: 'meituanwaimai',
            },
            {
                name: 'Food',
                title: '美食',
                iconName: 'meishi',
            },
            {
                name: 'Hotel',
                title: '酒店/民宿',
                iconName: 'jiudian1',
            },
            {
                name: 'Entertainment',
                title: '休闲/玩乐',
                iconName: 'xiuxianlvyou',
            },
            {
                name: 'Movie',
                title: '电影/演出',
                iconName: 'maoyan',
            },
            {
                name: 'TackOut',
                title: '打车',
                iconName: 'meituan_dache',
            },
            {
                name: 'TackOut',
                title: '美团买菜',
                iconName: '01maicaizuofan',
            },
            {
                name: 'TackOut',
                title: '超市/便利店',
                iconName: 'chaoshi',
            },
            {
                name: 'TackOut',
                title: '买药',
                iconName: 'gouyaoyindao',
            },
            {
                name: 'TackOut',
                title: '火车票/机票',
                iconName: 'huochepiaojipiao',
            },
            {
                name: 'TackOut',
                title: '美团优选',
                iconName: 'meituanyouxuan',
            },
            {
                name: 'TackOut',
                title: '免费领水果',
                iconName: 'guoshu',
            },
            {
                name: 'TackOut',
                title: '天天现金券',
                iconName: 'xianjinquan',
            },
            {
                name: 'TackOut',
                title: '医疗/牙科',
                iconName: 'yiliao',
            },
            {
                name: 'TackOut',
                title: '跑腿',
                iconName: 'paotui',
            },
            {
                name: 'TackOut',
                title: '按摩/足疗',
                iconName: 'anmozuliao',
            },
            {
                name: 'TackOut',
                title: '汗蒸',
                iconName: 'hanzhengwenquan',
            },
            {
                name: 'TackOut',
                title: 'KTV',
                iconName: 'fujinshangjia-KTV2',
            },
            {
                name: 'TackOut',
                title: '玩一玩',
                iconName: 'youxi',
            },
            {
                name: 'TackOut',
                title: '结婚/摄影',
                iconName: 'xinaixin1',
            },
            {
                name: 'TackOut',
                title: '生活服务',
                iconName: 'shenghuofuwu',
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