import { Children, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from '../../Icons';
import { IconButton } from '../../Base';

const CarouselWrapper = styled.div`
  grid-column: span 18;
  position: relative;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(36, 32px);
  grid-column-gap: 16px;
  overflow: hidden;
  grid-template-rows: minmax(150px, 1fr);
  & > div {
    transform: ${({ pos }) =>
      (pos && `translate3d(calc(${-100 * pos}% - ${pos * 16}px), 0, 0)`) ||
      'initial'};
    transition: transform 400ms ease-in;
  }
`;

const ControlButton = styled(IconButton)`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
  top: calc(50% - 16px);
  ${({ direction }) =>
    direction === 'prev' ? 'left : -16px' : 'right : -16px'}
  ${CarouselWrapper}:hover & {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 300ms;
  }
`;

const Carousel = ({ children }) => {
  const items = Children.toArray(children);
  const [pos, setPos] = useState(0);

  const handleNext = () => {
    if (items.length - 3 >= pos) setPos(pos + 1);
  };
  const handlePrev = () => {
    if (pos > 0) setPos(pos - 1);
  };

  return (
    <CarouselWrapper className="carousel slide" data-ride="carousel">
      <CardContainer pos={pos}>{items}</CardContainer>
      <ControlButton onClick={handlePrev} direction="prev">
        <ChevronLeft size="24px" aria-hidden="true" />
      </ControlButton>
      <ControlButton onClick={handleNext} direction="next">
        <ChevronRight size="24px" aria-hidden="true" />
      </ControlButton>
    </CarouselWrapper>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired
};

export default Carousel;
