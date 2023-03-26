import styled from 'styled-components'

export const Container = styled.ul`
 margin-top: 1.5rem;
`

export const CommentInfo = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  background: var(--gray-700);
  border-radius: 8px;
  padding: 1rem;
  

  li {
    list-style: none;
  }

  p {
    margin-top: 0.5rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;

  button {
    background: transparent;
    border: 0;
    color: var(--gray-400);
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 2px;

    &:hover{
      color: var(--green-300);
    }
  }

  svg {
    margin-right: 0.5rem;
  } 
}
  
`