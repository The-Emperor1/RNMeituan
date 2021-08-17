/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconJiudian1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M913.162822 342.982974c-222.488061-10.591494-307.780264-158.458881-314.970208-171.664899V26.678825a26.678825 26.678825 0 0 0-26.678825-26.678825H112.131101A26.678825 26.678825 0 0 0 85.452276 26.678825v970.64235a26.678825 26.678825 0 0 0 26.678825 26.678825h799.737798a26.678825 26.678825 0 0 0 26.678825-26.678825V369.621781a26.678825 26.678825 0 0 0-25.384902-26.638807zM683.804963 912.05565a26.678825 26.678825 0 0 1-26.678825 26.678825h-58.693415V341.222172l70.885638 36.349899a26.678825 26.678825 0 0 1 14.499942 23.744154z m171.091305-170.531049a26.678825 26.678825 0 0 1-26.678825 26.678825h-58.693415V426.8612l68.417847 26.678825a26.678825 26.678825 0 0 1 16.981072 24.851325z"
        fill={getIconColor(color, 0, '#2674FD')}
      />
      <Path
        d="M170.811177 173.278968l340.79531 0 0 84.331766-340.79531 0 0-84.331766Z"
        fill={getIconColor(color, 1, '#FFE41F')}
      />
      <Path
        d="M170.811177 512.300137l260.118544 0 0 86.706181-260.118544 0 0-86.706181Z"
        fill={getIconColor(color, 2, '#FFE41F')}
      />
      <Path
        d="M170.811177 341.662372l340.715274 0 0 86.706181-340.715274 0 0-86.706181Z"
        fill={getIconColor(color, 3, '#FFE41F')}
      />
    </Svg>
  );
};

IconJiudian1.defaultProps = {
  size: 18,
};

IconJiudian1 = React.memo ? React.memo(IconJiudian1) : IconJiudian1;

export default IconJiudian1;
