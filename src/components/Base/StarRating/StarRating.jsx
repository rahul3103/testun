import PropTypes from 'prop-types';
import { StarFilled } from '../../Icons';
import { Spacings } from '../../../styleConstants';
import H6 from '../H6/H6';
import P2 from '../P2/P2';

const StarRating = ({ className }) => (
  <>
    <H6 color="ORANGE">4.9</H6>
    <StarFilled
      color="ORANGE"
      size={Spacings.SPACING_3B}
      className={className}
    />
    <P2 color="TEXT_SECONDARY">(7 ratings)</P2>
  </>
);

export default StarRating;

StarRating.propTypes = {
  className: PropTypes.string
};

StarRating.defaultProps = {
  className: ''
};
