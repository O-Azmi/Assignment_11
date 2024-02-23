import type {ButtonProps} from "./Button.types.ts"
import styled from 'styled-components';

const Button = styled.button`
  background-color: #222222;
  width: 8em;
  color: white;
  padding: 1em;
  border: 1px solid white;
  border-radius: 20px;
  margin-left: 1em;
`
export default function StyledButton({backgroundColor, label}: ButtonProps){
  return(
    <>
    <Button
    style={{backgroundColor : backgroundColor}}>
    {label}
    </Button>
    </>
  )
}

