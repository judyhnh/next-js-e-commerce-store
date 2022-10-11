import { css } from '@emotion/react';

const footerStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  border-top: 3px solid green;
  padding: 20px;
  background-color: rgba(42, 141, 42, 0.19);
`;

export default function Footer() {
  return <footer css={footerStyle}>This is my footer.</footer>;
}
