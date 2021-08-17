/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconZuo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M353.59 558.4c-12.31 0-24.56-4.69-33.94-14.06-18.75-18.75-18.75-49.12 0-67.87l316.81-316.78c18.75-18.75 49.12-18.75 67.88 0s18.75 49.12 0 67.88L387.53 544.34c-9.37 9.37-21.62 14.06-33.94 14.06z"
        fill={getIconColor(color, 0, '#131414')}
      />
      <Path
        d="M670.41 878.4c-12.31 0-24.56-4.69-33.94-14.06L319.66 547.56c-18.75-18.75-18.75-49.12 0-67.87s49.12-18.75 67.88 0l316.81 316.78c18.75 18.75 18.75 49.12 0 67.88-9.38 9.36-21.63 14.05-33.94 14.05z"
        fill={getIconColor(color, 1, '#131414')}
      />
    </Svg>
  );
};

IconZuo.defaultProps = {
  size: 18,
};

IconZuo = React.memo ? React.memo(IconZuo) : IconZuo;

export default IconZuo;
