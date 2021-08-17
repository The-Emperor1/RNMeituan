/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconZhuangxiu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M217.3 409c-36.4 0-66-29.6-66-66V205c0-36.4 29.6-66 66-66h496.5c36.4 0 66 29.6 66 66v138c0 36.4-29.6 66-66 66H217.3z"
        fill={getIconColor(color, 0, '#65C8FF')}
      />
      <Path
        d="M713.8 157H217.3c-26.5 0-48 21.5-48 48v30c0-26.5 21.5-48 48-48h496.5c26.5 0 48 21.5 48 48v-30c0-26.5-21.5-48-48-48z"
        fill={getIconColor(color, 1, '#B3EAFF')}
      />
      <Path
        d="M465.5 885c-32.5 0-59-26.5-59-59V706c0-9.9 8.1-18 18-18h82c9.9 0 18 8.1 18 18v120c0 32.5-26.5 59-59 59z"
        fill={getIconColor(color, 2, '#F56E73')}
      />
      <Path
        d="M836.7 256h-39v-51c0-46.3-37.7-84-84-84H217.3c-46.3 0-84 37.7-84 84v138c0 46.3 37.7 84 84 84h496.5c46.3 0 84-37.7 84-84v-51h39c9.9 0 18 8.1 18 18v162c0 9.9-8.1 18-18 18h-79.5c-9.9 0-18 8.1-18 18s8.1 18 18 18h79.5c29.8 0 54-24.2 54-54V310c-0.1-29.8-24.3-54-54.1-54z m-74.9 87c0 26.5-21.5 48-48 48H217.3c-26.5 0-48-21.5-48-48v-51h379.5c9.9 0 18-8.1 18-18s-8.1-18-18-18H169.3v-51c0-26.5 21.5-48 48-48h496.5c26.5 0 48 21.5 48 48v138z"
        fill={getIconColor(color, 3, '#453B56')}
      />
      <Path
        d="M632 490H501.5c-29.8 0-54 24.2-54 54v126h-23c-19.9 0-36 16.1-36 36v120c0 42.5 34.5 77 77 77s77-34.5 77-77V706c0-19.9-16.1-36-36-36h-23V544c0-9.9 8.1-18 18-18H632c9.9 0 18-8.1 18-18s-8.1-18-18-18zM506.5 826c0 22.6-18.4 41-41 41s-41-18.4-41-41V706h82v120z"
        fill={getIconColor(color, 4, '#453B56')}
      />
      <Path
        d="M694.4 508m-18 0a18 18 0 1 0 36 0 18 18 0 1 0-36 0Z"
        fill={getIconColor(color, 5, '#453B56')}
      />
      <Path
        d="M608.4 274m-18 0a18 18 0 1 0 36 0 18 18 0 1 0-36 0Z"
        fill={getIconColor(color, 6, '#453B56')}
      />
    </Svg>
  );
};

IconZhuangxiu.defaultProps = {
  size: 18,
};

IconZhuangxiu = React.memo ? React.memo(IconZhuangxiu) : IconZhuangxiu;

export default IconZhuangxiu;
