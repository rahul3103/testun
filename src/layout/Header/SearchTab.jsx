import { useState, useRef } from 'react';
import styled from 'styled-components';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Search, Close } from '../../components/Icons';

const SearchTextField = styled(OutlinedInput)`
  float: right;
  color: red;
  width: 100px;
  font-family: UN-Font, -apple-system, BlinkMacSystemFont, sans-serif;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &.MuiOutlinedInput-root {
    &.Mui-focused {
      width: 100%;
    }
  }
  &.MuiOutlinedInput-root .MuiInputBase-input {
    ::placeholder {
      color: #808080;
      opacity: 1;
      font-weight: 600;
      font-size: 14px;
      line-height: 150%;
      font-family: UN-Font, -apple-system, BlinkMacSystemFont, sans-serif;
    }
    color: #3c4852;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    padding-left: 8px;
    font-family: UN-Font, -apple-system, BlinkMacSystemFont, sans-serif;
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
        startAdornment={<Search size="17.5px" />}
        fullWidth={!!searchText}
        onChange={handleChange}
        value={searchText}
        endAdornment={
          !!searchText && <Close size="17.5px" onClick={handleClick} />
        }
        inputRef={inputRef}
      />
    </MainWrapper>
  );
};

export default SearchTab;
