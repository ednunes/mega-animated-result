import styled from "styled-components";

export const PlayerCardContainer = styled.div`
  border: 1px solid red;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  & > label {
    text-transform: capitalize;
    margin: 0.5rem 0;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0.5rem 0;
    padding: 0;
    li {
      list-style: none;
      margin: 0;
      padding: 0;
      
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      justify-content: space-between;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--not-visible-color);
        border-radius: 50%;
        padding: 5px;
        width: 30px;
        height: 30px;
        background-color: var(--not-visible-color);
        color: var(--not-visible-color);
      }
    }
  }

  .active {
    background-color: green;
    color: white;
  }
`