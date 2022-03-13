import styled from "styled-components";
import { darken } from 'polished'


export const Container = styled.div`
 margin-top: 4rem;

 table{
   width: 100%;
   border-spacing: 0 0.5rem;

   th { 
     color: var(--text-body);
     font-weight: 400;
     padding: 1rem 2rem;
     text-align: left;
     line-height: 1.5rem;
   }

   td{
     padding: 1rem 2rem;
     border: 0;
     background: var(--shape);
     font-weight: 400;
     color: var(--text-body);
     border-radius: 0.25rem;

    &:first-child{
      color: var(--text-title);
    }

    &.status_1{
      color: var(--red);
    }

    &.status_2{
      color: var(--green);
    }

    button {
      padding: 1rem 2rem ;
      height: 4rem;
      border: 1px solid #d7d7d7;
      border-radius: 0.25rem;

      background: transparent;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: border-color 0.2s;

      &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
      }

      img {
      width:20px;
      height:20px;
      margin-left: 1rem;
      }

      span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title)

      }
    }

   }
 }
`;