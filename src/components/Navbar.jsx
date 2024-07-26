import { Badge, Search} from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';




const Container=styled.div `
height:80px;

`;
const Wrapper=styled.div `
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left=styled.div `
flex: 1;
display: flex;
align-items: center;
`
const Center=styled.div `
flex: 1;
text-align: center;
    
`
const Right=styled.div `
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
    
`
const Language=styled.span `
font-size: 14px;
cursor: pointer;
    
`
const MenuItem=styled.div `
  margin-left: 25px;
  font-size: 14px;
  cursor: pointer;
`


const Input=styled.input`
border: none;
  
`
const Logo=styled.h1 `
  font-weight: bold;
`
const SearchContainer=styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`


const Navbar = () => {
  return (
<Container>
    <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input/>
              <Search style={{color: "gray", fontSize:"16px"}}/>
            </SearchContainer>
        </Left>
        <Center>
          <Logo>
            LAMA.
          </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>

          <MenuItem>
                  <ShoppingCartOutlinedIcon style={{ fontSize: 40 }} />

          </MenuItem>


        </Right>

    </Wrapper>
</Container>
  )
}

export default Navbar