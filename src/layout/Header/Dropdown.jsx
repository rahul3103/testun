import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import styled, { keyframes } from 'styled-components';
import { KeyboardArrowDown } from '../../components/Icons';

const keyFrameOpen = keyframes`
  0% {
    height: 0px;
  }
  65% {
    height: 140px;
  }
  80% {
    height: 136px;
  }
  100% {
    height: 126px;
  }
`;

const keyFrameClose = keyframes`
  0% {
    opacity: 1 !important;
  }
  20% {
    height: 140px;
    opacity: 1 !important;
  }
  30% {
    height: 120px;
    opacity: 1 !important;
  }
  50% {
    opacity: 0 !important;
  }
  100% {
    height: 0px;
    opacity: 0 !important;
  }
`;

const DropDownButton = styled(Button)`
  &.MuiButtonBase-root {
    align-self: center;
    grid-column: 5/9;
    padding: 14px 20px;
    border-radius: 8px;
    border: 1px solid #f0f4f7;
    font-family: UN-Font, -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #3c4852;
  }
  &.MuiButton-root:hover {
    background-color: #fff;
    box-shadow: 0 8px 8px 0 #f0f4f7;
  }
  &.MuiButtonBase-root .MuiButton-label {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #3c4852;
    font-family: UN-Font, -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;

const StyledMenu = styled(Menu)`
  &.MuiPopover-root .MuiPaper-root {
    width: 176px;
    border: 1px solid #f0f4f7;
    border-radius: 8px;
    top: 72px !important;
    background-color: #fff;
    box-shadow: 0px 16px 32px #f0f4f7;
    transition: none !important;
    animation: ${({ open }) => (open ? keyFrameOpen : keyFrameClose)}
      ${({ open }) => (open ? '350ms' : '300ms')} ease-in-out 0s;
    transform: none !important;
    opacity: 1 !important;
  }
`;

const StyledArrowDown = styled(KeyboardArrowDown)`
  transition: transform 400ms ease-in-out;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DropDownButton
        disableRipple
        variant="outlined"
        onClick={handleClick}
        endIcon={<StyledArrowDown open={anchorEl} size="16px" />}
      >
        IIT JEE
      </DropDownButton>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        {/* <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </StyledMenuItem> */}
      </StyledMenu>
    </>
  );
};

export default Dropdown;
