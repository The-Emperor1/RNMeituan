/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconYouxi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1026 1024" width={size} height={size} {...rest}>
      <Path
        d="M826.31211 326.4c-179.2-38.4-179.2 83.2-313.6 83.2s-134.4-128-313.6-83.2C19.91211 371.2-69.68789 960 64.71211 960s224-166.4 448-166.4 313.6 166.4 448 166.4 44.8-588.8-134.4-633.6z m-441.6 332.8h-83.2v83.2h-89.6v-83.2h-83.2V576h83.2v-83.2h83.2V576h89.6v83.2z m384 64c-57.6 0-108.8-44.8-108.8-108.8s51.2-102.4 108.8-102.4 108.8 44.8 108.8 108.8-51.2 102.4-108.8 102.4z"
        fill={getIconColor(color, 0, '#ea986c')}
      />
      <Path
        d="M512.71211 345.6c19.2 0 38.4-6.4 57.6-12.8-6.4-12.8-12.8-32-12.8-57.6v-44.8c0-44.8 38.4-83.2 83.2-83.2h172.8V64h-192c-83.2 0-153.6 70.4-153.6 153.6v57.6c0 25.6-6.4 44.8-12.8 57.6 19.2 12.8 38.4 12.8 57.6 12.8z"
        fill={getIconColor(color, 1, '#ea986c')}
      />
    </Svg>
  );
};

IconYouxi.defaultProps = {
  size: 18,
};

IconYouxi = React.memo ? React.memo(IconYouxi) : IconYouxi;

export default IconYouxi;
