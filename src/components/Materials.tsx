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
  width: 50px;
  margin-right: 0.7rem;
  background-color: var(--color-base);
  border-radius: 50%;
`;
