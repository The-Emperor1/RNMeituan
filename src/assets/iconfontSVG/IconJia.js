/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconJia = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 464h576a48 48 0 0 1 0 96h-576a48 48 0 0 1 0-96z"
        fill={getIconColor(color, 0, '#333303')}
      />
      <Path
        d="M560 224v576a48 48 0 0 1-96 0v-576a48 48 0 0 1 96 0z"
        fill={getIconColor(color, 1, '#333303')}
      />
    </Svg>
  );
};

IconJia.defaultProps = {
  size: 18,
};

IconJia = React.memo ? React.memo(IconJia) : IconJia;

export default IconJia;
