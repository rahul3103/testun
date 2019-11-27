import PropTypes from 'prop-types';
import Icon from './Icon';
import { Spacings, BgColors } from '../../styleConstants';

const Bell = ({ size, color, className }) => (
  <Icon
    size={size}
    color={color}
    className={className}
    path="M24.331 15.757c0.183 1.091 0.697 2.1 1.472 2.889 0.54 0.526 0.85 1.244 0.864 1.998v1.053c-0.004 0.783-0.316 1.533-0.87 2.087s-1.304 0.866-2.087 0.87h-3.713l-2.093 0.041h-5.063l-2.106-0.041h-3.713c-0.783-0.004-1.533-0.316-2.087-0.87s-0.866-1.304-0.87-2.087v-1.053c0.014-0.754 0.324-1.472 0.864-1.998 0.78-0.779 1.303-1.778 1.499-2.862l1.35-7.344c0.32-1.783 1.257-3.397 2.646-4.559s3.143-1.799 4.955-1.799c1.812 0 3.565 0.637 4.955 1.799s2.326 2.776 2.646 4.559l1.35 7.317zM12.163 28.619c-0.842-0.679-1.427-1.626-1.657-2.683l2.106 0.041h5.063l2.093-0.041c-0.23 1.057-0.814 2.004-1.657 2.683s-1.892 1.049-2.974 1.049c-1.082 0-2.131-0.37-2.974-1.049z"
  />
);

Bell.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

Bell.defaultProps = {
  color: BgColors.BLACK,
  size: Spacings.SPACING_3B,
  className: ''
};

export default Bell;
