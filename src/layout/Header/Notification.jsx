import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import { NotificationBell } from '../../components/Icons';
import { BgColors, TextColors } from '../../styleConstants';

const StyledBadge = styled(Badge)`
  grid-column: 20/21;
  align-self: center;
  place-self: center;
  &.MuiBadge-root .MuiBadge-badge {
    background-color: ${BgColors.GREEN};
    color: ${TextColors.WHITE};
    position: absolute;
    right: 1px;
  }
`;

const Notification = () => (
  <StyledBadge badgeContent={4}>
    <NotificationBell size="18px" />
  </StyledBadge>
);

export default Notification;
