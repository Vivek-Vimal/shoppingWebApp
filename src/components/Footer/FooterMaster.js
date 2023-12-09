import React from "react";
import { PageLayout } from "../PageLayout";
import { PageWidth } from "../Width";
import Flex from "../Styling/Flex";
import { Text } from "../Text";

const FooterMaster = () => {
  return (
    <PageLayout bg="#000000" height="10rem">
      <PageWidth jc="space-between" direction="row">
        <Flex width="20rem">
          <svg
            width="35"
            height="35"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.228943"
              width="14.0699"
              height="14.0699"
              rx="4.05862"
              fill="#EBD96B"
            />
            <path
              d="M8.52613 7.55136L8.714 6.32717H7.53935V5.53275C7.53935 5.19783 7.70344 4.87137 8.22953 4.87137H8.76354V3.8291C8.76354 3.8291 8.27894 3.7464 7.81561 3.7464C6.84825 3.7464 6.21594 4.33273 6.21594 5.39416V6.32717H5.14064V7.55136H6.21594V10.5108H7.53935V7.55136H8.52613Z"
              fill="black"
            />
          </svg>
          <svg
            width="35"
            height="35"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.858078"
              y="0.228943"
              width="14.0699"
              height="14.0699"
              rx="4.05862"
              fill="#EBD96B"
            />
            <path
              d="M7.8787 5.72998C7.03844 5.72998 6.36068 6.40774 6.36068 7.248C6.36068 8.08826 7.03844 8.76602 7.8787 8.76602C8.71896 8.76602 9.39672 8.08826 9.39672 7.248C9.39672 6.40774 8.71896 5.72998 7.8787 5.72998ZM7.8787 8.23491C7.3357 8.23491 6.89179 7.79232 6.89179 7.248C6.89179 6.70368 7.33438 6.26109 7.8787 6.26109C8.42302 6.26109 8.86561 6.70368 8.86561 7.248C8.86561 7.79232 8.4217 8.23491 7.8787 8.23491ZM9.81289 5.66789C9.81289 5.86474 9.65435 6.02196 9.45882 6.02196C9.26196 6.02196 9.10475 5.86342 9.10475 5.66789C9.10475 5.47235 9.26329 5.31381 9.45882 5.31381C9.65435 5.31381 9.81289 5.47235 9.81289 5.66789ZM10.8183 6.02724C10.7958 5.55295 10.6875 5.13281 10.34 4.78667C9.99389 4.44052 9.57376 4.33219 9.09946 4.30841C8.61063 4.28066 7.14546 4.28066 6.65662 4.30841C6.18365 4.33087 5.76351 4.4392 5.41605 4.78535C5.06858 5.13149 4.96157 5.55162 4.93779 6.02592C4.91004 6.51475 4.91004 7.97993 4.93779 8.46876C4.96025 8.94306 5.06858 9.36319 5.41605 9.70934C5.76351 10.0555 6.18232 10.1638 6.65662 10.1876C7.14546 10.2153 8.61063 10.2153 9.09946 10.1876C9.57376 10.1651 9.99389 10.0568 10.34 9.70934C10.6862 9.36319 10.7945 8.94306 10.8183 8.46876C10.846 7.97993 10.846 6.51608 10.8183 6.02724ZM10.1868 8.99326C10.0837 9.25221 9.88423 9.45171 9.62396 9.55608C9.23422 9.71066 8.3094 9.67499 7.8787 9.67499C7.448 9.67499 6.52186 9.70934 6.13344 9.55608C5.87449 9.45303 5.675 9.25353 5.57062 8.99326C5.41605 8.60352 5.45172 7.6787 5.45172 7.248C5.45172 6.8173 5.41737 5.89116 5.57062 5.50274C5.67368 5.24379 5.87317 5.0443 6.13344 4.93992C6.52319 4.78535 7.448 4.82102 7.8787 4.82102C8.3094 4.82102 9.23554 4.78667 9.62396 4.93992C9.88291 5.04297 10.0824 5.24247 10.1868 5.50274C10.3414 5.89249 10.3057 6.8173 10.3057 7.248C10.3057 7.6787 10.3414 8.60484 10.1868 8.99326Z"
              fill="black"
            />
          </svg>
          <svg
            width="35"
            height="35"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.715897"
              y="0.228943"
              width="14.0699"
              height="14.0699"
              rx="4.05862"
              fill="#EBD96B"
            />
            <path
              d="M11.1143 5.92734C11.1186 5.98743 11.1186 6.04753 11.1186 6.10762C11.1186 7.94034 9.72364 10.0521 7.17412 10.0521C6.38866 10.0521 5.659 9.82458 5.04523 9.42972C5.15683 9.44259 5.26412 9.44688 5.38001 9.44688C6.02811 9.44688 6.62472 9.22799 7.10115 8.85457C6.49167 8.84169 5.9809 8.44253 5.80492 7.89314C5.89077 7.906 5.97661 7.91459 6.06675 7.91459C6.19122 7.91459 6.3157 7.89742 6.43158 7.86739C5.79635 7.73861 5.31991 7.18064 5.31991 6.50678V6.48962C5.50446 6.59263 5.71909 6.65701 5.94655 6.66559C5.57314 6.41664 5.3285 5.99173 5.3285 5.51101C5.3285 5.25348 5.39716 5.01742 5.51735 4.81139C6.19979 5.65265 7.22561 6.20203 8.37589 6.26213C8.35443 6.15912 8.34155 6.05182 8.34155 5.94452C8.34155 5.18052 8.95962 4.55817 9.7279 4.55817C10.1271 4.55817 10.4876 4.72556 10.7408 4.99596C11.0542 4.93587 11.3546 4.81998 11.6207 4.66118C11.5177 4.98309 11.2988 5.2535 11.0112 5.42517C11.2902 5.39514 11.5606 5.31786 11.8096 5.21057C11.6208 5.48526 11.3847 5.7299 11.1143 5.92734Z"
              fill="black"
            />
          </svg>
          <svg
            width="35"
            height="35"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.573853"
              y="0.228943"
              width="14.0699"
              height="14.0699"
              rx="4.05862"
              fill="#EBD96B"
            />
            <path
              d="M6.22237 6.42161V9.85242H5.30601V6.42161H6.22237ZM5.24894 5.52744C5.24894 5.39427 5.29544 5.28435 5.38845 5.19768C5.48146 5.11101 5.60618 5.06768 5.76261 5.06768C5.91692 5.06768 6.04058 5.11101 6.13359 5.19768C6.22871 5.28435 6.27628 5.39427 6.27628 5.52744C6.27628 5.66062 6.22871 5.77054 6.13359 5.85721C6.04058 5.94388 5.91692 5.98721 5.76261 5.98721C5.60618 5.98721 5.48146 5.94388 5.38845 5.85721C5.29544 5.77054 5.24894 5.66062 5.24894 5.52744ZM8.00107 7.15407V9.85242H7.08788V6.42161H7.94399L8.00107 7.15407ZM7.86789 8.01652H7.62057C7.62057 7.76286 7.65333 7.53456 7.71886 7.33163C7.78439 7.12659 7.87635 6.95219 7.99472 6.80845C8.1131 6.66259 8.25367 6.55161 8.41644 6.47551C8.58132 6.3973 8.76523 6.35819 8.96816 6.35819C9.12881 6.35819 9.27573 6.38145 9.4089 6.42795C9.54207 6.47446 9.65622 6.54844 9.75135 6.64991C9.84859 6.75137 9.92257 6.8856 9.9733 7.0526C10.0262 7.2196 10.0526 7.42358 10.0526 7.66456V9.85242H9.13304V7.66139C9.13304 7.5092 9.1119 7.39082 9.06963 7.30626C9.02735 7.22171 8.96499 7.16252 8.88255 7.1287C8.80222 7.09276 8.70287 7.0748 8.58449 7.0748C8.46189 7.0748 8.35514 7.09911 8.26424 7.14772C8.17546 7.19634 8.10147 7.26399 8.04229 7.35066C7.98521 7.43521 7.94188 7.53456 7.91228 7.64871C7.88269 7.76286 7.86789 7.88546 7.86789 8.01652Z"
              fill="black"
            />
          </svg>
        </Flex>
        <Text Text="@2024 All rights reserved" color="#EBD96B" />
      </PageWidth>
    </PageLayout>
  );
};

export default FooterMaster;
