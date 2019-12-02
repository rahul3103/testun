import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextColors, Fonts } from '../../../styleConstants';

const Anchor = styled.a`
  color: ${TextColors.BLACK};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  font-size: ${Fonts.P2};
  font-weight: ${Fonts.REGULAR};
`;

const StyledLink = ({ href, label, className, prefetch }) => {
  return (
    <Link href={href} passHref prefetch={prefetch}>
      <Anchor className={className}>{label}</Anchor>
    </Link>
  );
};

StyledLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  prefetch: PropTypes.bool
};

StyledLink.defaultProps = {
  className: '',
  prefetch: false
};

export default StyledLink;
