import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextColors } from '../../../styleConstants';

const Anchor = styled.a`
  color: ${TextColors.TEXT_PRIMARY};
`;

const StyledLink = ({ href, label, className }) => {
  return (
    <Link href={href} passHref prefetch={false}>
      <Anchor className={className}>{label}</Anchor>
    </Link>
  );
};

StyledLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

StyledLink.defaultProps = {
  className: '12'
};

export default StyledLink;
