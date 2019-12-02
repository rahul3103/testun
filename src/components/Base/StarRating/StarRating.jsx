import PropTypes from 'prop-types';
import { StarFilled } from '../../Icons';
import { Spacings } from '../../../styleConstants';

const StarRating = ({ className }) => (
  <StarFilled color="ORANGE" size={Spacings.SPACING_3B} className={className} />
);

export default StarRating;

StarRating.propTypes = {
  className: PropTypes.string
};

StarRating.defaultProps = {
  className: ''
};
