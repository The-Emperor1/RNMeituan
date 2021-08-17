/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'lvyou' | 'jiudian1' | 'chaoshi' | 'maoyan' | 'paotui' | 'meishi' | 'xinaixin1' | 'hanzhengwenquan' | 'xiuxianlvyou' | 'zu' | 'zu1' | '01maicaizuofan' | 'fujinshangjia-KTV2' | 'yiliao' | 'youxi' | 'shenghuofuwu' | 'meishi1' | 'huochepiaojipiao' | 'anmozuliao' | 'gouyaoyindao' | 'guoshu' | 'xianjinquan' | 'meituan_dache' | 'meituanyouxuan' | 'nanshi' | 'beijing' | 'meituanwaimai' | 'sousuo' | 'wode' | 'xiaoxi' | 'shang-' | 'xia-' | 'you-' | 'zuo-' | 'shouye' | 'luyin' | 'jia' | 'fapiao' | 'saoyisao' | 'kaquan' | 'erweima' | 'zihangche-copy';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
