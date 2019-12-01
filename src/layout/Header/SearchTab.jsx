import { useState, useRef } from 'react';
import styled from 'styled-components';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Search, Close } from '../../components/Icons';

const SearchTextField = styled(OutlinedInput)`
  float: right;
  width: 100%;
  justify-content: flex-end;
  &.MuiOutlinedInput-root .MuiInputBase-input {
    ::placeholder {
      color: #3c4852;
      opacity: 1;
      font-weight: 600;
      font-size: 14px;
      line-height: 150%;
    }
    color: #3c4852;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    padding-left: 8px;
    width: 50px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &.MuiOutlinedInput-root {
    &.Mui-focused .MuiInputBase-input {
      width: 100%;
      ::placeholder {
        color: #808080;
      }
    }
  }
  &.MuiOutlinedInput-adornedStart {
    padding-left: 24px;
  }
  &.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${({ value }) => (value ? '#f0f4f7' : '#fff')};
  }
  &:hover.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${({ value }) => (value ? '#f0f4f7' : '#fff')};
  }
  &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #f0f4f7;
    border-width: 1px;
    border-radius: 8px;
  }
`;

const MainWrapper = styled.div`
  grid-column: 11/19;
  align-self: center;
`;

const SearchIconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const SearchIcon = () => (
  <SearchIconWrapper>
    <Search size="24px" />
  </SearchIconWrapper>
);

const SearchTab = () => {
  const inputRef = useRef();
  const [searchText, setsearchText] = useState('');
  const handleChange = event => setsearchText(event.target.value);
  const handleClick = () => {
    setsearchText('');
    inputRef.current.focus();
  };
  return (
    <MainWrapper>
      <SearchTextField
        placeholder="Search"
        startAdornment={<SearchIcon />}
        fullWidth={!!searchText}
        onChange={handleChange}
        value={searchText}
        endAdornment={
          !!searchText && <Close size="24px" onClick={handleClick} />
        }
        inputRef={inputRef}
      />
    </MainWrapper>
  );
};

export default SearchTab;
