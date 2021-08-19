import { fetchFeatures, fetchOptimizationList } from './api'

export const home = {
    state: {
        features: [
            {
                name: 'feature1',
                title: '外卖',
                iconName: 'meituanwaimai',
            },
            {
                name: 'feature2',
                title: '美食',
                iconName: 'meishi',
            },
            {
                name: 'feature3',
                title: '酒店/民宿',
                iconName: 'jiudian1',
            },
            {
                name: 'feature4',
                title: '休闲/玩乐',
                iconName: 'xiuxianlvyou',
            },
            {
                name: 'feature5',
                title: '电影/演出',
                iconName: 'maoyan',
            },
            {
                name: 'feature6',
                title: '打车',
                iconName: 'meituan_dache',
            },
            {
                name: 'feature7',
                title: '美团买菜',
                iconName: '01maicaizuofan',
            },
            {
                name: 'feature8',
                title: '超市/便利店',
                iconName: 'chaoshi',
            },
            {
                name: 'feature9',
                title: '买药',
                iconName: 'gouyaoyindao',
            },
            {
                name: 'feature10',
                title: '火车票/机票',
                iconName: 'huochepiaojipiao',
            },
            {
                name: 'feature11',
                title: '美团优选',
                iconName: 'meituanyouxuan',
            },
            {
                name: 'feature12',
                title: '免费领水果',
                iconName: 'guoshu',
            },
            {
                name: 'feature13',
                title: '天天现金券',
                iconName: 'xianjinquan',
            },
            {
                name: 'feature14',
                title: '医疗/牙科',
                iconName: 'yiliao',
            },
            {
                name: 'feature15',
                title: '跑腿',
                iconName: 'paotui',
            },
            {
                name: 'feature16',
                title: '按摩/足疗',
                iconName: 'anmozuliao',
            },
            {
                name: 'feature17',
                title: '汗蒸',
                iconName: 'hanzhengwenquan',
            },
            {
                name: 'feature18',
                title: 'KTV',
                iconName: 'fujinshangjia-KTV2',
            },
            {
                name: 'feature19',
                title: '玩一玩',
                iconName: 'youxi',
            },
            {
                name: 'feature20',
                title: '结婚/摄影',
                iconName: 'xinaixin1',
            },
            {
                name: 'feature21',
                title: '生活服务',
                iconName: 'shenghuofuwu',
            },
            {
                name: 'feature22',
                title: '宠物',
                iconName: 'zu',
            },
            {
                name: 'feature23',
                title: '周边游/旅游',
                iconName: 'lvyou',
            },
            {
                name: 'feature24',
                title: '景点/门票',
                iconName: 'beijing',
            },
            {
                name: 'feature25',
                title: '理发/男士',
                iconName: 'nanshi',
            },
            {
                name: 'feature26',
                title: '医学美容',
                iconName: 'zu1',
            },
            {
                name: 'feature27',
                title: '学习培训',
                iconName: 'xuexi',
            },
            {
                name: 'feature28',
                title: '健身/运动',
                iconName: 'jianshen',
            },
            {
                name: 'feature29',
                title: '红包签到',
                iconName: 'qiandai',
            },
            {
                name: 'feature30',
                title: '逛街/商场',
                iconName: 'gouwu',
            },
            {
                name: 'feature31',
                title: '骑车',
                iconName: 'cycleqiche',
            },
            {
                name: 'feature32',
                title: '电玩游戏厅',
                iconName: 'youxi',
            },
            {
                name: 'feature33',
                title: '养车/用车',
                iconName: 'xiuchedianlu',
            },
            {
                name: 'feature34',
                title: '汽车票',
                iconName: 'qichepiao',
            },
            {
                name: 'feature35',
                title: '酒吧',
                iconName: 'jiuba',
            },
            {
                name: 'feature36',
                title: '免费领福利',
                iconName: 'fuli',
            },
            {
                name: 'feature37',
                title: '密室',
                iconName: 'zu2',
            },
            {
                name: 'feature38',
                title: '借钱',
                iconName: 'jieqian1',
            },
            {
                name: 'feature39',
                title: '手机充值',
                iconName: 'shoujichongzhi',
            },
            {
                name: 'feature40',
                title: '点我就有钱',
                iconName: 'jieqian',
            },
            {
                name: 'feature41',
                title: '家居/装修',
                iconName: 'zhuangxiu',
            },
            {
                name: 'feature42',
                title: '生活缴费',
                iconName: 'shenghuojiaofei',
            },
            {
                name: 'feature43',
                title: '新奇体验',
                iconName: 'weibiaoti--',
            },
            {
                name: 'feature44',
                title: '母婴服务',
                iconName: 'icon-',
            },
            {
                name: 'feature45',
                title: '充电宝',
                iconName: 'chongdianbao-mian',
            },
            
        ],  // 功能点
        optimizationList: [
            {
                imgUrl: 'https://p1.meituan.net/linglong/6d39283327d90858ea59ef553d939d9f30586.png.webp@179w_218h_1e_1l',
                price: '',
            },
            {
                imgUrl: 'https://p0.meituan.net/groceryproductapipicpublic/c86e456d94f4e22df029027bc1b4dba9337267147.png.webp@224w_179h_1e_1l',
                price: '0.98',
            },
            {
                imgUrl: 'https://img.meituan.net/750.750/groceryinfrastructureimages/45f2266ba89533f8b5900391e9c87dc1794272889.png.webp@446w_446h_1e_1l',
                price: '12.5',
            },
            {
                imgUrl: 'https://p0.meituan.net/groceryproductapipicpublic/a583c07fd2337dbd9c987fbd33109d81670079502.png.webp@224w_179h_1e_1l',
                price: '0.9',
            },
            {
                imgUrl: 'https://p0.meituan.net/groceryinfrastructureimages/a44a61d4532844bb2c8ae78eb729b582527622943.png.webp@224w_179h_1e_1l',
                price: '4.5',
            },
            {
                imgUrl: 'https://p0.meituan.net/mallimages/15002685267c0c96d905841aec6481ce784439.png.webp@479w_356h_1e_1l',
                price: '0.92',
            },
            {
                imgUrl: 'https://p0.meituan.net/groceryproductapipicpublic/ad756e29f8f083b6e2a81a64357a52d544254680.png.webp@224w_179h_1e_1l',
                price: '0.85',
            },
            {
                imgUrl: 'https://p0.meituan.net/groceryproductapipicpublic/b5da99e0c349c7d3413f2a5f97e214a91130594645.png.webp@224w_179h_1e_1l',
                price: '2.8',
            }
        ], // 优选列表
    },     
    reducers: {
        SET_FEATURES(state, features) {
            return {...state, features};
        },
        SET_OPTIMIZATION_LIST(state, optimizationList) {
            return {...List, optimizationList}
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
        async fetchOptimizationList(payload, rootState) {
            const res = await fetchOptimizationList(payload);
            const {
                code, 
                data,
            } = res;
            dispatch.root.SET_OPTIMIZATION_LIST(data);
        },
    }),
};