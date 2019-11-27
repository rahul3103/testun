import PropTypes from 'prop-types';
import Icon from './Icon';
import { Spacings } from '../../styleConstants';

const Verified = ({ size, color }) => (
  <Icon
    size={size}
    color={color}
    path="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13c7.18 0 13-5.82 13-13v0c-0.008-7.177-5.823-12.992-12.999-13h-0.001zM22.667 12.627l-8.133 8.16c-0.181 0.181-0.431 0.293-0.707 0.293h-0c-0.276-0.003-0.524-0.115-0.707-0.294l0 0-3.787-3.827c-0.181-0.181-0.292-0.431-0.292-0.707s0.112-0.526 0.292-0.707v0c0.179-0.184 0.43-0.298 0.707-0.298s0.527 0.114 0.706 0.298l0 0 3.080 3.12 7.507-7.453c0.179-0.184 0.43-0.298 0.707-0.298s0.527 0.114 0.706 0.298l0 0c0.158 0.176 0.255 0.41 0.255 0.667 0 0.296-0.129 0.563-0.334 0.746l-0.001 0.001z"
  />
);

Verified.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};

Verified.defaultProps = {
  color: 'black',
  size: Spacings.SPACING_3B
};

export default Verified;