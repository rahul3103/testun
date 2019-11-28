import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H5, P2 } from '../../Base';

import { Spacings } from '../../../styleConstants';

const AuthorPropertiesWrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin-right: ${Spacings.SPACING_6B};
`;

const EducatorProperties = ({ stats, label }) => {
  return (
    <AuthorPropertiesWrapper>
      <H5>{stats}</H5>
      <P2 color="TEXT_SECONDARY">{label}</P2>
    </AuthorPropertiesWrapper>
  );
};

EducatorProperties.propTypes = {
  stats: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default EducatorProperties;
