import PropTypes from 'prop-types';
import { Spacings, TextColors } from '../../styleConstants';

const Icon = ({
  width,
  height,
  color,
  title,
  onClick,
  className,
  path,
  size
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 32 32"
    onClick={onClick}
    className={className}
  >
    <title>{title}</title>
    <path d={path} fill={color} />
  </svg>
);

export default Icon;

Icon.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  color: TextColors.BLACK,
  size: Spacings.SPACING_3B,
  className: '',
  width: Spacings.SPACING_3B,
  height: Spacings.SPACING_3B,
  onClick: () => {}
};
