import PropTypes from 'prop-types';
import Icon from './Icon';
import { Spacings, BgColors } from '../../styleConstants';

const Search = ({ size, color, className }) => (
  <Icon
    size={size}
    color={color}
    className={className}
    path="M27.373 25.96l-5.467-5.467c1.394-1.682 2.24-3.863 2.24-6.241 0-0.004 0-0.009 0-0.013v0.001c-0.008-5.468-4.438-9.899-9.906-9.907h-0.001c-5.471 0-9.907 4.435-9.907 9.907s4.435 9.907 9.907 9.907v0 0c0.004 0 0.008 0 0.013 0 2.378 0 4.559-0.846 6.257-2.253l-0.016 0.013 5.467 5.467c0.181 0.181 0.431 0.292 0.707 0.292s0.526-0.112 0.707-0.292v0c0.181-0.181 0.292-0.431 0.292-0.707s-0.112-0.526-0.292-0.707v0zM14.24 22.147c-4.363-0.005-7.898-3.543-7.898-7.907 0-2.181 0.883-4.156 2.312-5.587l-0 0c1.417-1.433 3.383-2.32 5.556-2.32 0.011 0 0.021 0 0.032 0h-0.002c4.367 0 7.907 3.54 7.907 7.907s-3.54 7.907-7.907 7.907v0z"
  />
);

Search.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

Search.defaultProps = {
  color: BgColors.BLACK,
  size: Spacings.SPACING_3B,
  className: ''
};

export default Search;
