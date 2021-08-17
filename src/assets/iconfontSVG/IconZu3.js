/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconZu3 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M803.157333 273.032533a374.8864 374.8864 0 0 0-361.2672-130.218666 407.688533 407.688533 0 0 0-290.747733 263.918933 377.0368 377.0368 0 0 0 644.471467 355.703467 15.496533 15.496533 0 0 0-2.013867-22.084267l-273.885867-223.880533 280.849067-221.559467a15.530667 15.530667 0 0 0 2.594133-21.879467z m-290.7136 96.324267a52.565333 52.565333 0 1 1 52.565334-52.565333 52.5312 52.5312 0 0 1-52.565334 52.565333z"
        fill={getIconColor(color, 0, '#E23C3E')}
      />
      <Path
        d="M823.671467 519.714133m-84.0704 0a84.0704 84.0704 0 1 0 168.1408 0 84.0704 84.0704 0 1 0-168.1408 0Z"
        fill={getIconColor(color, 1, '#E98751')}
      />
    </Svg>
  );
};

IconZu3.defaultProps = {
  size: 18,
};

IconZu3 = React.memo ? React.memo(IconZu3) : IconZu3;

export default IconZu3;
