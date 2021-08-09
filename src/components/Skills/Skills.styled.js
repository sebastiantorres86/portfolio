import styled from 'styled-components'

export const Container = styled.article`
  height: auto;
  width: fit-content;
  background: ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 22px 22px 33px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    flex-direction: column;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    /* min-width: 953px; */
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    :first-child {
      margin-right: 53px;
    }
  }
`

export const Title = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.gray2};
  margin-bottom: 16px;
`

export const SkillName = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray2};
  max-width: 104px;
  /* margin-right: 19px; */
`

export const Bar = styled.div`
  position: relative;
  width: 222px;
  height: 9px;
  background: #c4c4c4;
  border-radius: 12px;

  @media screen and (min-width: 1024px) {
    width: 348px;
    margin-left: 19px;
  }
`

export const BlueBar = styled.div`
  position: absolute;

  width: ${props => props.percentage}%;
  height: 9px;
  background: ${({ theme }) => theme.blue};
  border-radius: 12px;
`

export const SkillContainer = styled.div`
  width: 345px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`
