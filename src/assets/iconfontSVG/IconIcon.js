/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconIcon = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M34.64 549.12a88.72 88.72 0 0 0-1.44 125.36l315.44 315.04a88.72 88.72 0 0 0 125.52-1.44l387.68-387.2-439.6-438.96z m433.28-225.84l1.28 1.28a48 48 0 0 1 0 67.68L201.52 659.92a48 48 0 0 1-67.76 0l-1.28-1.28a48 48 0 0 1 0-67.6L400 323.04a48 48 0 0 1 67.76 0z m505.68-204l27.68-27.68a48 48 0 0 0 0-67.68l-1.28-1.28a48 48 0 0 0-67.76 0L904 50.08a245.6 245.6 0 0 0-296 20.08L583.12 45.6a48 48 0 0 0-67.76 0l-1.28 1.28a48 48 0 0 0 0 67.68l395.28 394.8a48 48 0 0 0 67.76 0l1.28-1.28a48 48 0 0 0 0-67.68L953.84 416a244.96 244.96 0 0 0 19.76-296.8z m0 0"
        fill={getIconColor(color, 0, '#FBB325')}
      />
    </Svg>
  );
};

IconIcon.defaultProps = {
  size: 18,
};

IconIcon = React.memo ? React.memo(IconIcon) : IconIcon;

export default IconIcon;
