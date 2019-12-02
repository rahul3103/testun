import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import styled, { keyframes } from 'styled-components';
import { KeyboardArrowDown, Check, ChevronRight } from '../../components/Icons';
import { Divider } from '../../components/Base';

const keyFrameOpen = height => keyframes`
  0% {
    height: 0px;
  }
  65% {
    height: ${height + 20}px;
  }
  80% {
    height: ${height + 10}px;
  }
  100% {
    height: ${height}px;
  }
`;

const keyFrameClose = height => keyframes`
  0% {
    opacity: 1 !important;
  }
  20% {
    height: ${height + 20}px;
    opacity: 1 !important;
  }
  30% {
    height: ${height}px;
    opacity: 1 !important;
  }

  100% {
    height: 0px;
  }
`;

const DropDownButton = styled(Button)`
  align-self: center;
  grid-column: 5/9;
  padding: 14px 20px;
  border-radius: 8px;
  border: 1px solid #f0f4f7;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #3c4852;
  :hover {
    background-color: #fff;
    border-color: #dde6ed;
  }
  &.MuiButtonBase-root .MuiButton-label {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #3c4852;
  }
`;

const StyledMenu = styled(Menu)`
  &.MuiPopover-root .MuiPaper-root {
    min-width: 233px;
    border: 1px solid #f0f4f7;
    border-radius: 8px;
    margin-top: 12px;
    background-color: #fff;
    box-shadow: 0px 16px 32px #f0f4f7;
    transition: none !important;
    animation: ${({ open, menuheight }) =>
        open ? keyFrameOpen(menuheight) : keyFrameClose(menuheight)}
      ${({ open }) => (open ? '350ms' : '300ms')} ease-in-out 0s;
    transform: none !important;
    opacity: 1 !important;
  }
`;

const StyledArrowDown = styled(KeyboardArrowDown)`
  transition: transform 400ms ease-in-out;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 16px;
`;

const Label = styled.span`
  font-size: 14px;
  line-height: 150%;
  color: ${({ selected }) => (selected ? '#08bd80' : '#3C4852')};
  flex-grow: 1;
  display: block;
  padding-left: ${({ secondary }) => (secondary ? 0 : '16px')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'initial')};
`;

const Language = styled.span`
  display: block;
  font-size: 12px;
  line-height: 150%;
  color: #808080;
  padding-right: 4px;
`;

const StyledDivider = styled(Divider)`
  margin: 0 16px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const StyledImg = styled.img``;

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuHeight, setMenuHeight] = useState(0);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    const menuWrapper = document.getElementById('goal-selection');
    const menu = menuWrapper.getElementsByTagName('ul');
    setMenuHeight(menu[0].clientHeight);
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
        id="goal-selection"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        variant="menu"
        menuheight={menuHeight}
      >
        <MenuItem>
          <StyledImg src="static/images/goal.svg" />
          <Label selected>IIT JEE</Label>
          <Check size="24px" color="#08bd80" />
        </MenuItem>
        <MenuItem>
          <StyledImg src="static/images/exam.svg" />
          <Label>Exams</Label>
        </MenuItem>
        <StyledDivider />
        <MenuItem>
          <Label secondary>Language</Label>
          <Language>Malyalam</Language>
          <ChevronRight size="16px" />
        </MenuItem>
        <MenuItem>
          <Label secondary>Manage goals</Label>
          <ChevronRight size="16px" />
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default Dropdown;
