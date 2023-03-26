import styled from 'styled-components'

export const Container = styled.article`
  margin: 0 auto;
  max-width: 50rem;
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: .875rem;
  }

  button {
    margin-top: 0.5rem;
    background: none;
    border: 0;
    color: var(--green-300);
    opacity: 0.8;
    font-size: 0.875rem;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }
`

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  strong {
    display: block;
    color: var(--gray-100);
  }

  span{
    display: block;
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6;
  }
`

export const Content = styled.div `
  line-height: 1.6;
  color: var(--gray-300);
  margin-top: 1.5rem;

  strong {
    font-size: 1.2rem;
    @media (max-width: 768px) {
      font-size: 1rem;
  }
  }

  p {
    margin-top: 0.5rem;
  }

 
`
