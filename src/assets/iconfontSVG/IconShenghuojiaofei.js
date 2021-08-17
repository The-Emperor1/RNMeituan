/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShenghuojiaofei = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 992c-219 0-397.5-177.75-397.5-396.75 0-91.5 63-210.75 188.25-354.75C392.75 137 481.25 59 485 56l27-24 27 24c3.75 3 92.25 81 182.25 184.5 124.5 144 188.25 263.25 188.25 354.75C909.5 814.25 731 992 512 992z m0-849c-108 99.75-314.25 319.5-314.25 452.25 0 173.25 141 314.25 314.25 314.25s314.25-141 314.25-314.25C826.25 462.5 620 242.75 512 143z"
        fill={getIconColor(color, 0, '#0B89F3')}
      />
      <Path
        d="M456.5 747.5s-0.75 0-0.75-0.75C471.5 689 486.5 630.5 502.25 572H368s-0.75-0.75-0.75-1.5L572 337.25l0.75 0.75C557 395.75 542 453.5 526.25 512.75h136.5c-69 78.75-138 156.75-206.25 234.75z"
        fill={getIconColor(color, 1, '#0B89F3')}
      />
    </Svg>
  );
};

IconShenghuojiaofei.defaultProps = {
  size: 18,
};

IconShenghuojiaofei = React.memo ? React.memo(IconShenghuojiaofei) : IconShenghuojiaofei;

export default IconShenghuojiaofei;
