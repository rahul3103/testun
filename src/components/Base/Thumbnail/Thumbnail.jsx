import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Spacings } from '../../../styleConstants';

const Thumbnail = styled.div.attrs(props => ({
  className: props.className
}))`
  height: ${({ horizontal }) => !horizontal && Spacings.SPACING_38B};
  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export default Thumbnail;

Thumbnail.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  horizontal: PropTypes.bool
};
