/* eslint-disable */

import React from 'react';

import IconLvyou from './IconLvyou';
import IconJiudian1 from './IconJiudian1';
import IconChaoshi from './IconChaoshi';
import IconMaoyan from './IconMaoyan';
import IconPaotui from './IconPaotui';
import IconMeishi from './IconMeishi';
import IconXinaixin1 from './IconXinaixin1';
import IconHanzhengwenquan from './IconHanzhengwenquan';
import IconXiuxianlvyou from './IconXiuxianlvyou';
import IconZu from './IconZu';
import IconZu1 from './IconZu1';
import Icon01Maicaizuofan from './Icon01Maicaizuofan';
import IconFujinshangjiaKtv2 from './IconFujinshangjiaKtv2';
import IconYiliao from './IconYiliao';
import IconYouxi from './IconYouxi';
import IconShenghuofuwu from './IconShenghuofuwu';
import IconMeishi1 from './IconMeishi1';
import IconHuochepiaojipiao from './IconHuochepiaojipiao';
import IconAnmozuliao from './IconAnmozuliao';
import IconGouyaoyindao from './IconGouyaoyindao';
import IconGuoshu from './IconGuoshu';
import IconXianjinquan from './IconXianjinquan';
import IconMeituanDache from './IconMeituanDache';
import IconMeituanyouxuan from './IconMeituanyouxuan';
import IconNanshi from './IconNanshi';
import IconBeijing from './IconBeijing';
import IconMeituanwaimai from './IconMeituanwaimai';
import IconSousuo from './IconSousuo';
import IconWode from './IconWode';
import IconXiaoxi from './IconXiaoxi';
import IconShang from './IconShang';
import IconXia from './IconXia';
import IconYou from './IconYou';
import IconZuo from './IconZuo';
import IconShouye from './IconShouye';
import IconLuyin from './IconLuyin';
import IconJia from './IconJia';
import IconFapiao from './IconFapiao';
import IconSaoyisao from './IconSaoyisao';
import IconKaquan from './IconKaquan';
import IconErweima from './IconErweima';
import IconZihangcheCopy from './IconZihangcheCopy';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'lvyou':
      return <IconLvyou key="1" {...rest} />;
    case 'jiudian1':
      return <IconJiudian1 key="2" {...rest} />;
    case 'chaoshi':
      return <IconChaoshi key="3" {...rest} />;
    case 'maoyan':
      return <IconMaoyan key="4" {...rest} />;
    case 'paotui':
      return <IconPaotui key="5" {...rest} />;
    case 'meishi':
      return <IconMeishi key="6" {...rest} />;
    case 'xinaixin1':
      return <IconXinaixin1 key="7" {...rest} />;
    case 'hanzhengwenquan':
      return <IconHanzhengwenquan key="8" {...rest} />;
    case 'xiuxianlvyou':
      return <IconXiuxianlvyou key="9" {...rest} />;
    case 'zu':
      return <IconZu key="10" {...rest} />;
    case 'zu1':
      return <IconZu1 key="11" {...rest} />;
    case '01maicaizuofan':
      return <Icon01Maicaizuofan key="12" {...rest} />;
    case 'fujinshangjia-KTV2':
      return <IconFujinshangjiaKtv2 key="13" {...rest} />;
    case 'yiliao':
      return <IconYiliao key="14" {...rest} />;
    case 'youxi':
      return <IconYouxi key="15" {...rest} />;
    case 'shenghuofuwu':
      return <IconShenghuofuwu key="16" {...rest} />;
    case 'meishi1':
      return <IconMeishi1 key="17" {...rest} />;
    case 'huochepiaojipiao':
      return <IconHuochepiaojipiao key="18" {...rest} />;
    case 'anmozuliao':
      return <IconAnmozuliao key="19" {...rest} />;
    case 'gouyaoyindao':
      return <IconGouyaoyindao key="20" {...rest} />;
    case 'guoshu':
      return <IconGuoshu key="21" {...rest} />;
    case 'xianjinquan':
      return <IconXianjinquan key="22" {...rest} />;
    case 'meituan_dache':
      return <IconMeituanDache key="23" {...rest} />;
    case 'meituanyouxuan':
      return <IconMeituanyouxuan key="24" {...rest} />;
    case 'nanshi':
      return <IconNanshi key="25" {...rest} />;
    case 'beijing':
      return <IconBeijing key="26" {...rest} />;
    case 'meituanwaimai':
      return <IconMeituanwaimai key="27" {...rest} />;
    case 'sousuo':
      return <IconSousuo key="28" {...rest} />;
    case 'wode':
      return <IconWode key="29" {...rest} />;
    case 'xiaoxi':
      return <IconXiaoxi key="30" {...rest} />;
    case 'shang-':
      return <IconShang key="31" {...rest} />;
    case 'xia-':
      return <IconXia key="32" {...rest} />;
    case 'you-':
      return <IconYou key="33" {...rest} />;
    case 'zuo-':
      return <IconZuo key="34" {...rest} />;
    case 'shouye':
      return <IconShouye key="35" {...rest} />;
    case 'luyin':
      return <IconLuyin key="36" {...rest} />;
    case 'jia':
      return <IconJia key="37" {...rest} />;
    case 'fapiao':
      return <IconFapiao key="38" {...rest} />;
    case 'saoyisao':
      return <IconSaoyisao key="39" {...rest} />;
    case 'kaquan':
      return <IconKaquan key="40" {...rest} />;
    case 'erweima':
      return <IconErweima key="41" {...rest} />;
    case 'zihangche-copy':
      return <IconZihangcheCopy key="42" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
