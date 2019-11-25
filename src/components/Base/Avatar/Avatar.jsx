import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { Spacings } from '../../../styleConstants';

const StyledImage = styled.div`
  height: ${props => (props.height ? props.height : Spacings.SPACING_14B)};
  width: ${props => (props.width ? props.width : Spacings.SPACING_14B)};
  background-image: url('${props => props.imageUrl}');
  border-radius: ${Spacings.SPACING_2B};
  background-size: ${props => (props.imgMode ? props.imgMode : 'cover')};
  background-repeat: no-repeat;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'white'};
`;

const Avatar = ({ imageUrl, height, width, backgroundColor, imgMode }) => {
  return (
    <StyledImage
      imageUrl={imageUrl}
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      imgMode={imgMode}
    />
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  imgMode: PropTypes.oneOf(['contain', 'cover'])
};

Avatar.defaultProps = {
  height: Spacings.SPACING_14B,
  width: Spacings.SPACING_14B,
  backgroundColor: 'white',
  imgMode: 'cover'
};

export default Avatar;
