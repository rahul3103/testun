import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { Spacings, BgColors } from '../../../styleConstants';

const StyledImage = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-image: url('${props => props.imageUrl}');
  border-radius: ${Spacings.SPACING_2B};
  background-size: ${props => props.imgMode};
  background-repeat: no-repeat;
  background-color: ${props => props.backgroundColor};
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
  backgroundColor: BgColors.WHITE,
  imgMode: 'cover'
};

export default Avatar;
