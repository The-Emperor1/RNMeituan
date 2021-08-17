/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconXia = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M510.38 718.42c-12.28 0-24.56-4.69-33.94-14.06L159.67 387.55c-18.75-18.75-18.75-49.12 0-67.88s49.12-18.75 67.88 0l316.78 316.81c18.75 18.75 18.75 49.12 0 67.88-9.38 9.37-21.66 14.06-33.95 14.06z"
        fill={getIconColor(color, 0, '#131414')}
      />
      <Path
        d="M513.6 718.42c-12.28 0-24.56-4.69-33.94-14.06-18.75-18.75-18.75-49.12 0-67.88l316.78-316.81c18.75-18.75 49.12-18.75 67.88 0s18.75 49.12 0 67.88L547.54 704.36c-9.37 9.37-21.66 14.06-33.94 14.06z"
        fill={getIconColor(color, 1, '#131414')}
      />
    </Svg>
  );
};

IconXia.defaultProps = {
  size: 18,
};

IconXia = React.memo ? React.memo(IconXia) : IconXia;

export default IconXia;
