import React from 'react';
import { css } from 'emotion';

const Spinner = (props) => (
  <span className={css`
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 24px;
    height: 24px;
    margin: -12px 0 0 -12px;
    z-index: 2;
    border-color: #999;
    border-radius: 99px;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      opacity: 0.25;
      border: 2px solid transparent;
      border-color: inherit;
      border-radius: inherit;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      border: 2px solid transparent;
      border-top-color: inherit;
      border-radius: inherit;
      animation: spin 450ms infinite linear;

      @keyframes spin {
        to {
          transform: rotate(359deg);
        }
      }
    }

    ${props.className};
  `} />
);

export default Spinner;
