import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useDispatchToStore } from '../../../utils/customHooks';
import { closeDrawer } from '../../../redux/actions/others';

const StyledDrawer = styled(Drawer)`
  &.MuiDrawer-root .MuiPaper-root {
    background-color: #fcfcfc;
    display: grid;
    grid-template-columns: repeat(11, 32px);
    grid-column-gap: 16px;
    grid-auto-rows: max-content;
    padding-left: 48px;
    padding-top: 24px;
    padding-right: 115px;
  }
`;

const Close = styled.img`
  float: left;
  grid-column: 1/12;
  margin-bottom: 24px;
  cursor: pointer;
`;

const UNDrawer = ({ children }) => {
  const drawerState = useSelector(state => state.others.drawerState);
  const dispatch = useDispatchToStore();
  const closeDrawerAction = () => dispatch(closeDrawer());

  return (
    <StyledDrawer anchor="right" open={drawerState} onClose={closeDrawerAction}>
      <Close
        src="/static/images/close-circle.svg"
        onClick={closeDrawerAction}
      />
      {children}
    </StyledDrawer>
  );
};

export default UNDrawer;

UNDrawer.propTypes = {
  children: PropTypes.node.isRequired
};
