import PropTypes from 'prop-types';
import Icon from './Icon';
import { Spacings, BgColors } from '../../styleConstants';

const Close = ({ size, color, className, onClick }) => (
  <Icon
    onClick={onClick}
    size={size}
    color={color}
    className={className}
    path="M17.413 16l8.627-8.627c0.166-0.178 0.268-0.418 0.268-0.682 0-0.552-0.448-1-1-1-0.264 0-0.504 0.102-0.682 0.269l0.001-0.001-8.627 8.627-8.627-8.627c-0.178-0.166-0.418-0.268-0.682-0.268-0.552 0-1 0.448-1 1 0 0.264 0.102 0.504 0.269 0.682l-0.001-0.001 8.627 8.627-8.627 8.627c-0.181 0.181-0.292 0.431-0.292 0.707s0.112 0.526 0.292 0.707v0c0.181 0.181 0.431 0.292 0.707 0.292s0.526-0.112 0.707-0.292v0l8.627-8.627 8.627 8.627c0.181 0.181 0.431 0.292 0.707 0.292s0.526-0.112 0.707-0.292v0c0.181-0.181 0.292-0.431 0.292-0.707s-0.112-0.526-0.292-0.707v0z"
  />
);

Close.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Close.defaultProps = {
  color: BgColors.BLACK,
  size: Spacings.SPACING_3B,
  className: '',
  onClick: () => {}
};

export default Close;
