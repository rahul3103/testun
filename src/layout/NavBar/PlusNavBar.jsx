import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { H4, H5, Link } from '../../components/Base';

const PlusNavBarWrapper = styled.div`
  grid-column: 1/7;
  position: relative;
  background: #f9fafb;
`;

const Selected = styled.div`
  height: ${({ selectedEl }) => (selectedEl === 'H4' ? 44 : 34)}px;
  width: 100%;
  position: absolute;
  background-color: #fff;
  top: ${({ selectedElPos, selectedEl }) =>
    selectedElPos + (selectedEl === 'H4' ? 10 : 5)}px;
  transition: all 400ms ease-in ;
  transition-property: top, height;
  border-radius: 8px;
  border: 1px solid #f0f4f7;
  box-shadow: 0 16px 32px 0 #f0f4f7
}
`;

const NavItems = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
`;

const MainItem = styled(H4)`
  padding: 8px 16px;
  margin-top: 8px;
  :hover {
    color: #08bd80;
  }
`;

const Item = styled(H5)`
  padding: 8px 16px;
  margin-top: 4px;
  color: #9aafbf;
  :hover {
    color: #08bd80;
  }
`;

const PlusNavBar = () => {
  const [selectedEl, setselectedEl] = useState('H4');
  const [selectedElPos, setselectedElPos] = useState(0);

  const handleClick = event => {
    setselectedEl(event.currentTarget.firstElementChild.tagName);
    setselectedElPos(event.currentTarget.offsetTop);
  };

  useEffect(() => {
    setselectedEl('H4');
  }, []);

  return (
    <PlusNavBarWrapper>
      <Selected selectedElPos={selectedElPos} selectedEl={selectedEl} />
      <NavItems>
        <Link href="/" onClick={handleClick}>
          <MainItem>Plus</MainItem>
        </Link>
        <Link href="/" onClick={handleClick}>
          <Item>My schedule</Item>
        </Link>
        <Link href="/" onClick={handleClick}>
          <Item>Enrolled courses</Item>
        </Link>
        <Link href="/" onClick={handleClick}>
          <Item>Topics</Item>
        </Link>
        <Link href="/" onClick={handleClick}>
          <Item>Test series</Item>
        </Link>
        <Link href="/" onClick={handleClick}>
          <MainItem>Special classes</MainItem>
        </Link>
        <Link href="/" onClick={handleClick}>
          <MainItem>Free courses</MainItem>
        </Link>
        <Link href="/" onClick={handleClick}>
          <Item>My library</Item>
        </Link>
      </NavItems>
    </PlusNavBarWrapper>
  );
};

export default PlusNavBar;
