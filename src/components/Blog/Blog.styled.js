import styled from 'styled-components'
import laptop from '../../assets/laptop.jpg'

export const SideA = styled.div`
  grid-area: sideA;
`

export const SideB = styled.div`
  grid-area: sideB;
`

export const SideC = styled.div`
  grid-area: sideC;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Container = styled.article`
  height: auto;
  width: fit-content;
  min-width: 536px;
  background: ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 22px 0 22px 20px;
  display: grid;
  gap: 50px 0px;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: auto;
  grid-template-areas:
    'sideA sideB'
    'sideC sideC';

  @media screen and (min-width: 1024px) {
    max-width: 1046px;
    gap: 0px 50px;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'sideA sideB'
      'sideC sideB';
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`

export const StyledImage = styled.div`
  width: 100%;
  height: 267px;
  background: url(${laptop});
  background-size: cover;
  background-position: right;
  border: none;
  border-radius: 12px 0 0 12px;

  @media screen and (min-width: 1024px) {
    width: 512px;
    height: 350px;
  }
`

export const UpperTitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #e0e0e0;
  margin: 0;
`

export const Title = styled.h2`
  width: 178px;
  height: 87px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: ${({ theme }) => theme.gray1};
  margin: 30px 0;
`

export const Copy = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray3};
  :first-child {
    margin-bottom: 1.5rem;
  }
`

export const Link = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  margin-top: 60px;
`
