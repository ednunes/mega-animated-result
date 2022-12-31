import styled from "styled-components";

export const ResultCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem 3rem;
  align-items: center;
  justify-content: center;

  & > span {
    display: flex;
    border: 2px solid var(--primary);
    border-radius: 50%;
    align-items: center;
    font-size: 30px;
    justify-content: center;
    width: 50px;
    height: 50px;
  }

  .active {
    color: white;
    background-color: var(--primary);
  }
`