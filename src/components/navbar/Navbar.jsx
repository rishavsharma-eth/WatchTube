import styled from "styled-components";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
  background-color: ${({theme}) => theme.bgLighter};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.2rem 1.6rem;
  position:relative;
  @media screen and (max-width: 778px) {
    
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.soft};
  position: absolute;
  left: 0;
  right: 0;
  max-width: max-content;
  margin: auto;

  .searchIcon{
    font-size: 16px;
    color: #ffffff4f;
    font-size: 20px;

    @media screen and (max-width: 778px) {
      font-size: 16px;
    }
    @media screen and (max-width:576px) {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 778px) {
    margin-left: 20px;
  }
  @media screen and (max-width:576px) {
    margin-left: 20px;
  }
`;
const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
  height: 30px;
  width: 300px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width:576px) {
    height: 25px;
    width: 180px;
  }
  @media screen and (max-width:458px) {
    height: 20px;
    width: 140px;
  }
  @media screen and (max-width:398px) {
    height: 20px;
    width: 100px;
  }
  @media screen and (max-width:340px) {
    height: 16px;
    width: 80px;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.3rem 0.6rem;
  max-width: max-content;
  max-height: min-content;
  background: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;

  .signInIcon{
    @media screen and (max-width:458px) {
      font-size: 16px;
      
    }
    @media screen and (max-width:340px) {
      font-size: 14px;
    }
  }

  @media screen and (max-width:576px) {
    font-size: 12px;
  }
  @media screen and (max-width:458px) {
    padding: 0.3rem 0.3rem;
  }
  @media screen and (max-width:340px) {
    padding: 0.2rem 0.2rem;
    font-size: 11px;
    gap: 6px;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
            <Input placeholder="Search" />
            <SearchOutlinedIcon className="searchIcon" />
        </Search>
        <Button> <AccountCircleOutlinedIcon className="signInIcon"/> Sign in</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar