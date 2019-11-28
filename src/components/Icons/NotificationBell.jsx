import PropTypes from 'prop-types';
import Icon from './Icon';
import { Spacings, BgColors } from '../../styleConstants';

const NotificationBell = ({ size, color, className }) => (
  <Icon
    size={size}
    color={color}
    className={className}
    path="M26.307 20c-0.742-0.755-1.261-1.732-1.449-2.822l-0.005-0.032-1.333-7.227c-0.662-3.593-3.771-6.279-7.507-6.279s-6.844 2.686-7.499 6.232l-0.007 0.047-1.333 7.253c-0.206 1.114-0.733 2.081-1.48 2.827l-0 0c-0.515 0.502-0.839 1.199-0.853 1.971l-0 0.003v1.040c0.008 1.61 1.31 2.912 2.919 2.92h3.667c0.473 2.123 2.341 3.686 4.573 3.686s4.1-1.563 4.567-3.655l0.006-0.031h3.667c1.61-0.008 2.912-1.31 2.92-2.919v-1.041c-0.014-0.775-0.338-1.471-0.853-1.973l-0.001-0.001zM16 27.667c-0.003 0-0.007 0-0.011 0-1.122 0-2.083-0.694-2.476-1.675l-0.006-0.018h5c-0.4 1-1.36 1.693-2.483 1.693-0.008 0-0.017-0-0.025-0h0.001zM25.16 23.053c0 0.508-0.412 0.92-0.92 0.92v0h-16.48c-0.508 0-0.92-0.412-0.92-0.92v0-1.040c0.021-0.232 0.124-0.436 0.28-0.586l0-0c1.022-1.027 1.736-2.36 1.994-3.85l0.006-0.043 1.333-7.24c0.5-2.645 2.793-4.618 5.547-4.618s5.046 1.973 5.541 4.583l0.006 0.035 1.333 7.227c0.264 1.537 0.978 2.875 2.001 3.907l-0.001-0.001c0.156 0.151 0.259 0.355 0.28 0.583l0 0.004z"
  />
);

NotificationBell.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

NotificationBell.defaultProps = {
  color: BgColors.BLACK,
  size: Spacings.SPACING_3B,
  className: ''
};

export default NotificationBell;
