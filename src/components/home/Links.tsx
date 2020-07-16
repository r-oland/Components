// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  display: inline;
  svg {
    display: inline;
  }
`;

export default function Links() {
  return (
    <Wrapper>
      <a
        href="https://www.npmjs.com/package/hooks-lib"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "0.75em" }}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0V50H50V0H0ZM40.625 40.625H34.375V15.625H25V40.625H9.375V9.375H40.625V40.625Z"
            fill="#343434"
          />
        </svg>
      </a>

      <a
        href="https://github.com/r-oland/hooks-lib"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1133 1.09706e-06C5.86816 -0.00292859 0 5.86231 0 13.1016C0 18.8262 3.6709 23.6924 8.7832 25.4795C9.47168 25.6523 9.36621 25.1631 9.36621 24.8291V22.5586C5.39063 23.0244 5.22949 20.3936 4.96289 19.9541C4.42383 19.0342 3.14941 18.7998 3.53027 18.3604C4.43555 17.8945 5.3584 18.4775 6.42773 20.0566C7.20117 21.2021 8.70996 21.0088 9.47461 20.8184C9.6416 20.1299 9.99902 19.5146 10.4912 19.0371C6.37207 18.2988 4.65527 15.7852 4.65527 12.7969C4.65527 11.3467 5.13281 10.0137 6.07031 8.93848C5.47266 7.16602 6.12598 5.64844 6.21387 5.42285C7.91602 5.27051 9.68555 6.6416 9.82324 6.75C10.79 6.48926 11.8945 6.35156 13.1309 6.35156C14.373 6.35156 15.4805 6.49512 16.4561 6.75879C16.7871 6.50684 18.4277 5.3291 20.0098 5.47266C20.0947 5.69824 20.7334 7.18067 20.1709 8.92969C21.1201 10.0078 21.6035 11.3525 21.6035 12.8057C21.6035 15.7998 19.875 18.3164 15.7441 19.043C16.098 19.3909 16.3789 19.8059 16.5705 20.2636C16.7622 20.7214 16.8607 21.2127 16.8604 21.709V25.0049C16.8838 25.2686 16.8604 25.5293 17.2998 25.5293C22.4883 23.7803 26.2236 18.8789 26.2236 13.1045C26.2236 5.86231 20.3525 1.09706e-06 13.1133 1.09706e-06V1.09706e-06Z"
            fill="#343434"
          />
        </svg>
      </a>
    </Wrapper>
  );
}
