/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSousuo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M923.24 891.41l-146.6-146.62c66.58-70.24 107.49-165.05 107.49-269.24 0-215.97-175.71-391.67-391.68-391.67s-391.67 175.7-391.67 391.67 175.7 391.67 391.67 391.67c86.99 0 167.43-28.52 232.51-76.68l149.57 149.58 48.71-48.71zM169.67 475.55c0-177.97 144.79-322.76 322.76-322.76 177.98 0 322.77 144.79 322.77 322.76S670.42 798.31 492.44 798.31 169.67 653.52 169.67 475.55z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSousuo.defaultProps = {
  size: 18,
};

IconSousuo = React.memo ? React.memo(IconSousuo) : IconSousuo;

export default IconSousuo;
