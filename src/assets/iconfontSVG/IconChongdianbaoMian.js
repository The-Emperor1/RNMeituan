/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconChongdianbaoMian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M278.654031 102.4a94.523077 94.523077 0 0 0-93.987446 84.440615L120.895015 782.162708a126.030769 126.030769 0 0 0 125.306093 139.453046h531.58203a126.030769 126.030769 0 0 0 125.306093-139.453046L839.317662 186.840615A94.523077 94.523077 0 0 0 745.314462 102.4H278.654031zM275.692308 638.030769h472.615384a126.030769 126.030769 0 1 1 0 252.061539H275.692308a126.030769 126.030769 0 1 1 0-252.061539z m277.157415-293.604431l154.072615-14.66683-282.702769 369.664 58.872123-235.456985-144.935384 26.340431L562.034215 123.982769l-9.184492 220.459323z"
        fill={getIconColor(color, 0, '#437ACF')}
      />
    </Svg>
  );
};

IconChongdianbaoMian.defaultProps = {
  size: 18,
};

IconChongdianbaoMian = React.memo ? React.memo(IconChongdianbaoMian) : IconChongdianbaoMian;

export default IconChongdianbaoMian;
