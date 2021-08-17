/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconHuochepiaojipiao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M471.923 598.477H3.046V509.53h290.292a172.35 172.35 0 0 1 85.414 22.656l96.192 54.886c5.44 3.098 3.238 11.405-3.02 11.405z"
        fill={getIconColor(color, 0, '#4dc6ee')}
      />
      <Path
        d="M855.82 560.742l-193.369-136.09c-12.595-8.87-27.405-13.542-42.803-13.542H3.059v48.59h616.589c0.691 0 1.344 0.255 2.022 0.306-10.252 24.615-16.358 63.143 23.732 93.99 51.353 39.502 130.956 34.791 160.908 31.322l21.543 15.168c22.797 16.039 30.49 45.556 19.008 70.388l-76.467 53.196c-12.404 8.615-26.957 13.172-42.023 13.172H3.06v24.294h-0.013v88.947h716.48V785.83h8.858c25.011 0 49.114-7.539 69.747-21.85l85.888-59.737 2.727-4.774c27.2-47.578 13.888-107.213-30.925-138.727z m32.5-182.016L543.462 265.613c-45.056-31.565-9.228-53.517 14.976-49.165l146.266 26.253 192.704-69.184v39.526l-67.52 54.861c-4.762 3.866-3.06 11.494 2.88 12.98l64.627 16.153 79.066-19.763h44.467l-116.34 97.728a18.208 18.208 0 0 1-16.268 3.724z"
        fill={getIconColor(color, 1, '#4dc6ee')}
      />
    </Svg>
  );
};

IconHuochepiaojipiao.defaultProps = {
  size: 18,
};

IconHuochepiaojipiao = React.memo ? React.memo(IconHuochepiaojipiao) : IconHuochepiaojipiao;

export default IconHuochepiaojipiao;
