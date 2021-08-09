import styled from 'styled-components'

export const Container = styled.article`
  height: auto;
  width: fit-content;
  background: ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 24px 22px 22px;

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: auto;

  column-gap: 36px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, auto);
  }
`

export const Title = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.gray2};
  /* margin-bottom: 44px; */
`

export const StyledImage = styled.div`
  width: 383px;
  height: 139px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border: none;
  border-radius: 12px;
  margin-bottom: 23px;

  @media screen and (min-width: 1024px) {
    margin: 0 0 26px 0;
    width: 295px;
    height: 139px;
  }
`

export const Hobbie = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 1024px) {
  }
`

export const SubTitle = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.gray1};
`

export const Copy = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray3};
`
