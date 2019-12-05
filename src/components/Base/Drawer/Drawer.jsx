import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';

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

const UNDrawer = ({ children, drawerState, onClose }) => (
  <StyledDrawer anchor="right" open={drawerState} onClose={onClose}>
    <Close src="/static/images/close-circle.svg" onClick={onClose} />
    {children}
  </StyledDrawer>
);

export default UNDrawer;

UNDrawer.propTypes = {
  children: PropTypes.node.isRequired,
  drawerState: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
