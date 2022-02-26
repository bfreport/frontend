import styled, { css } from "styled-components";

export const M88 = css`
  --color-text: rgba(255, 255, 255, 0.88);
  --color-alt-text: rgba(255, 255, 255, 0.68);
  --color-base: #161616;
`;

export const M92 = css`
  --color-text: rgba(255, 255, 255, 0.92);
  --color-alt-text: rgba(255, 255, 255, 0.72);
  --color-base: #212121;
`;

export const M96 = css`
  --color-text: rgba(255, 255, 255, 0.96);
  --color-alt-text: rgba(255, 255, 255, 0.76);
  --color-base: #2b2b2b;
`;

export const M100 = css`
  --color-text: rgba(255, 255, 255, 1);
  --color-alt-text: rgba(255, 255, 255, 0.8);
  --color-base: #363636;
`;

export const Container = styled.div`
  @media (min-width: 850px) {
    padding-left: 8.33%;
  }
  @media (max-width: 850px) {
    padding-left: 2%;
  }
`;

export const Circle = styled.span`
  ${M100}
  height: 45px;
  width: 45px;
  margin-right: 0.7rem;
  background-color: var(--color-base);
  border-radius: 50%;
`;

export const SelectSecondary = styled.select`
  ${M100}
  background: var(--color-base);
  color: var(--color-text);
  border-radius: 6px;
  border: none;
  height: 34px;
  padding: 0px 12px 2.5px 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 3.5px;
`;
