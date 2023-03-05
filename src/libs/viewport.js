import { css } from "styled-components";

function makeViewport(condition) {
  return (style) => css`
    @media (${condition}) {
      ${style}
    }
  `;
}

export const mobile = makeViewport("max-width: 640px");
export const tablet = makeViewport("max-width: 768px");
export const desktop = makeViewport("max-width: 1000px");