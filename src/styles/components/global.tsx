import { css, Global } from '@emotion/react';
import { FC } from 'react';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
      }
      body {
        font-size: inherit;
        font-family: 'Roboto', sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
export { GlobalStyles };
