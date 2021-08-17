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
                name: 'TackOut1',
                title: '打车',
                iconName: 'meituan_dache',
            },
            {
                name: 'TackOut2',
                title: '美团买菜',
                iconName: '01maicaizuofan',
            },
            {
                name: 'TackOut3',
                title: '超市/便利店',
                iconName: 'chaoshi',
            },
            {
                name: 'TackOut4',
                title: '买药',
                iconName: 'gouyaoyindao',
            },
            {
                name: 'TackOut5',
                title: '火车票/机票',
                iconName: 'huochepiaojipiao',
            },
            {
                name: 'TackOut6',
                title: '美团优选',
                iconName: 'meituanyouxuan',
            },
            {
                name: 'TackOut7',
                title: '免费领水果',
                iconName: 'guoshu',
            },
            {
                name: 'TackOut8',
                title: '天天现金券',
                iconName: 'xianjinquan',
            },
            {
                name: 'TackOut9',
                title: '医疗/牙科',
                iconName: 'yiliao',
            },
            {
                name: 'TackOut10',
                title: '跑腿',
                iconName: 'paotui',
            },
            {
                name: 'TackOut11',
                title: '按摩/足疗',
                iconName: 'anmozuliao',
            },
            {
                name: 'TackOut12',
                title: '汗蒸',
                iconName: 'hanzhengwenquan',
            },
            {
                name: 'TackOut13',
                title: 'KTV',
                iconName: 'fujinshangjia-KTV2',
            },
            {
                name: 'TackOut14',
                title: '玩一玩',
                iconName: 'youxi',
            },
            {
                name: 'TackOut15',
                title: '结婚/摄影',
                iconName: 'xinaixin1',
            },
            {
                name: 'TackOut16',
                title: '生活服务',
                iconName: 'shenghuofuwu',
            },
            {
                name: 'TackOut17',
                title: '宠物',
                iconName: 'zu',
            },
            {
                name: 'TackOut18',
                title: '周边游/旅游',
                iconName: 'lvyou',
            },
            {
                name: 'TackOut19',
                title: '景点/门票',
                iconName: 'beijing',
            },
            {
                name: 'TackOut20',
                title: '理发/男士',
                iconName: 'nanshi',
            },
            {
                name: 'TackOut21',
                title: '医学美容',
                iconName: 'zu1',
            },
            {
                name: 'TackOut22',
                title: '学习培训',
                iconName: 'xuexi',
            },
            {
                name: 'TackOut23',
                title: '健身/运动',
                iconName: 'jianshen',
            },
            {
                name: 'TackOut24',
                title: '红包签到',
                iconName: 'qiandai',
            },
            {
                name: 'TackOut25',
                title: '逛街/商场',
                iconName: 'gouwu',
            },
            {
                name: 'TackOut26',
                title: '骑车',
                iconName: 'cycleqiche',
            },
            {
                name: 'TackOut27',
                title: '电玩游戏厅',
                iconName: 'youxi',
            },
            {
                name: 'TackOut24',
                title: '养车/用车',
                iconName: 'xiuchedianlu',
            },
            {
                name: 'TackOut25',
                title: '汽车票',
                iconName: 'qichepiao',
            },
            {
                name: 'TackOut26',
                title: '酒吧',
                iconName: 'jiuba',
            },
            {
                name: 'TackOut27',
                title: '免费领福利',
                iconName: 'fuli',
            },
            {
                name: 'TackOut24',
                title: '密室',
                iconName: 'zu2',
            },
            {
                name: 'TackOut25',
                title: '借钱',
                iconName: 'jieqian1',
            },
            {
                name: 'TackOut26',
                title: '手机充值',
                iconName: 'shoujichongzhi',
            },
            {
                name: 'TackOut27',
                title: '点我就有钱',
                iconName: 'jieqian',
            },
            {
                name: 'TackOut24',
                title: '家居/装修',
                iconName: 'zhuangxiu',
            },
            {
                name: 'TackOut25',
                title: '生活缴费',
                iconName: 'shenghuojiaofei',
            },
            {
                name: 'TackOut26',
                title: '新奇体验',
                iconName: 'weibiaoti--',
            },
            {
                name: 'TackOut27',
                title: '母婴服务',
                iconName: 'icon-',
            },
            {
                name: 'TackOut27',
                title: '充电宝',
                iconName: 'chongdianbao-mian',
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