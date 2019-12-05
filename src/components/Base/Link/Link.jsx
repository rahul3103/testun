import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextColors, Fonts } from '../../../styleConstants';

const Anchor = styled.a`
  color: ${TextColors.BLACK};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  font-size: ${Fonts.P2};
  font-weight: ${Fonts.REGULAR};
  cursor: pointer;
`;

const StyledLink = ({ href, className, prefetch, children, onClick }) => (
  <Link href={href} passHref prefetch={prefetch}>
    <Anchor onClick={onClick} className={className}>
      {children}
    </Anchor>
  </Link>
);
StyledLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  prefetch: PropTypes.bool,
  onClick: PropTypes.func
};

StyledLink.defaultProps = {
  className: '',
  prefetch: false,
  onClick: () => {}
};

export default StyledLink;
