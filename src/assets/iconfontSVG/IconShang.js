/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M830.39 718.2c-12.28 0-24.56-4.69-33.94-14.06L479.67 387.32c-18.75-18.75-18.75-49.12 0-67.88s49.12-18.75 67.88 0l316.78 316.81c18.75 18.75 18.75 49.12 0 67.88-9.38 9.38-21.66 14.07-33.94 14.07z"
        fill={getIconColor(color, 0, '#131414')}
      />
      <Path
        d="M193.61 718.2c-12.28 0-24.56-4.69-33.94-14.06-18.75-18.75-18.75-49.12 0-67.88l316.78-316.81c18.75-18.75 49.12-18.75 67.88 0s18.75 49.12 0 67.88l-316.79 316.8c-9.37 9.38-21.65 14.07-33.93 14.07z"
        fill={getIconColor(color, 1, '#131414')}
      />
    </Svg>
  );
};

IconShang.defaultProps = {
  size: 18,
};

IconShang = React.memo ? React.memo(IconShang) : IconShang;

export default IconShang;
