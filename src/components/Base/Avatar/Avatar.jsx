import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Spacings, BgColors } from '../../../styleConstants';

const Avatar = styled.div`
  height: ${({ height, size }) => size || height};
  width: ${({ width, size }) => size || width};
  background-image: url('${({ src }) => src}');
  border-radius: ${Spacings.SPACING_2B};
  background-size: ${({ imgMode }) => imgMode};
  background-repeat: no-repeat;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  imgMode: PropTypes.oneOf(['contain', 'cover']),
  size: PropTypes.string
};

Avatar.defaultProps = {
  height: Spacings.SPACING_14B,
  width: Spacings.SPACING_14B,
  backgroundColor: BgColors.WHITE,
  imgMode: 'cover'
};

export default Avatar;
