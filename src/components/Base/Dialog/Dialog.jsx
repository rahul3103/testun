import { forwardRef } from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)`
  &.MuiDialog-root .MuiDialog-container .MuiPaper-root {
    position: absolute;
    bottom: 0px;
  }
`;

const UNDialog = ({ children, dialogState, onClose }) => (
  <StyledDialog
    open={dialogState}
    TransitionComponent={Transition}
    onClose={onClose}
  >
    {children}
  </StyledDialog>
);

export default UNDialog;

UNDialog.propTypes = {
  children: PropTypes.node.isRequired,
  dialogState: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
