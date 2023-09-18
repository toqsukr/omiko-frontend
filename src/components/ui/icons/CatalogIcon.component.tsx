import { FC } from 'react';
import { IIcon } from './icon/icon';
import Icon from './icon/icon.component';

const CatalogIcon: FC<IIcon> = ({ filled, ...props }) => {
  return (
    <Icon>
      {filled ? (
        <svg
          {...props}
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.9387 13.2074C0.687452 11.9729 0.68685 3.07174 1.9387 1.83791C3.07224 0.720688 12.0693 0.720763 13.2022 1.83791C14.335 2.95504 14.4539 11.9587 13.2022 13.2074C11.9504 14.456 3.19 14.4418 1.9387 13.2074Z"
            fill="#D9D9D9"
          />
          <path
            d="M20.71 13.2073C19.4588 11.9729 19.4582 3.07171 20.71 1.83789C21.8436 0.720666 30.8406 0.720741 31.9735 1.83789C33.1063 2.95502 33.2252 11.9586 31.9735 13.2073C30.7217 14.456 21.9613 14.4418 20.71 13.2073Z"
            fill="#D9D9D9"
          />
          <path
            d="M20.8417 32.0688C19.5905 30.8344 19.5899 21.9332 20.8417 20.6994C21.9753 19.5821 30.9724 19.5822 32.1052 20.6994C33.2381 21.8165 33.357 30.8201 32.1052 32.0688C30.8535 33.3175 22.093 33.3033 20.8417 32.0688Z"
            fill="#D9D9D9"
          />
          <path
            d="M1.93866 32.0688C0.687414 30.8344 0.686812 21.9332 1.93866 20.6994C3.07221 19.5821 12.0693 19.5822 13.2021 20.6994C14.335 21.8165 14.4539 30.8201 13.2021 32.0688C11.9504 33.3175 3.18997 33.3033 1.93866 32.0688Z"
            fill="#D9D9D9"
          />
          <path
            d="M1.9387 13.2074C0.687452 11.9729 0.68685 3.07174 1.9387 1.83791C3.07224 0.720688 12.0693 0.720763 13.2022 1.83791C14.335 2.95504 14.4539 11.9587 13.2022 13.2074C11.9504 14.456 3.19 14.4418 1.9387 13.2074Z"
            stroke="#989898"
            strokeWidth="2"
          />
          <path
            d="M20.71 13.2073C19.4588 11.9729 19.4582 3.07171 20.71 1.83789C21.8436 0.720666 30.8406 0.720741 31.9735 1.83789C33.1063 2.95502 33.2252 11.9586 31.9735 13.2073C30.7217 14.456 21.9613 14.4418 20.71 13.2073Z"
            stroke="#989898"
            strokeWidth="2"
          />
          <path
            d="M20.8417 32.0688C19.5905 30.8344 19.5899 21.9332 20.8417 20.6994C21.9753 19.5821 30.9724 19.5822 32.1052 20.6994C33.2381 21.8165 33.357 30.8201 32.1052 32.0688C30.8535 33.3175 22.093 33.3033 20.8417 32.0688Z"
            stroke="#989898"
            strokeWidth="2"
          />
          <path
            d="M1.93866 32.0688C0.687414 30.8344 0.686812 21.9332 1.93866 20.6994C3.07221 19.5821 12.0693 19.5822 13.2021 20.6994C14.335 21.8165 14.4539 30.8201 13.2021 32.0688C11.9504 33.3175 3.18997 33.3033 1.93866 32.0688Z"
            stroke="#989898"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg
          {...props}
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.9387 13.2074C0.687452 11.9729 0.68685 3.07174 1.9387 1.83791C3.07224 0.720688 12.0693 0.720763 13.2022 1.83791C14.335 2.95504 14.4539 11.9587 13.2022 13.2074C11.9504 14.456 3.19 14.4418 1.9387 13.2074Z"
            fill="none"
          />
          <path
            d="M20.71 13.2073C19.4588 11.9729 19.4582 3.07171 20.71 1.83789C21.8436 0.720666 30.8406 0.720741 31.9735 1.83789C33.1063 2.95502 33.2252 11.9586 31.9735 13.2073C30.7217 14.456 21.9613 14.4418 20.71 13.2073Z"
            fill="none"
          />
          <path
            d="M20.8417 32.0688C19.5905 30.8344 19.5899 21.9332 20.8417 20.6994C21.9753 19.5821 30.9724 19.5822 32.1052 20.6994C33.2381 21.8165 33.357 30.8201 32.1052 32.0688C30.8535 33.3175 22.093 33.3033 20.8417 32.0688Z"
            fill="none"
          />
          <path
            d="M1.93866 32.0688C0.687414 30.8344 0.686812 21.9332 1.93866 20.6994C3.07221 19.5821 12.0693 19.5822 13.2021 20.6994C14.335 21.8165 14.4539 30.8201 13.2021 32.0688C11.9504 33.3175 3.18997 33.3033 1.93866 32.0688Z"
            fill="none"
          />
          <path
            d="M1.9387 13.2074C0.687452 11.9729 0.68685 3.07174 1.9387 1.83791C3.07224 0.720688 12.0693 0.720763 13.2022 1.83791C14.335 2.95504 14.4539 11.9587 13.2022 13.2074C11.9504 14.456 3.19 14.4418 1.9387 13.2074Z"
            stroke="#989898"
            strokeWidth="2"
          />
          <path
            d="M20.71 13.2073C19.4588 11.9729 19.4582 3.07171 20.71 1.83789C21.8436 0.720666 30.8406 0.720741 31.9735 1.83789C33.1063 2.95502 33.2252 11.9586 31.9735 13.2073C30.7217 14.456 21.9613 14.4418 20.71 13.2073Z"
            stroke="#989898"
            strokeWidth="2"
          />
          <path
            d="M20.8417 32.0688C19.5905 30.8344 19.5899 21.9332 20.8417 20.6994C21.9753 19.5821 30.9724 19.5822 32.1052 20.6994C33.2381 21.8165 33.357 30.8201 32.1052 32.0688C30.8535 33.3175 22.093 33.3033 20.8417 32.0688Z"
            stroke="#989898"
            strokeWidth="2"
          />
          <path
            d="M1.93866 32.0688C0.687414 30.8344 0.686812 21.9332 1.93866 20.6994C3.07221 19.5821 12.0693 19.5822 13.2021 20.6994C14.335 21.8165 14.4539 30.8201 13.2021 32.0688C11.9504 33.3175 3.18997 33.3033 1.93866 32.0688Z"
            stroke="#989898"
            strokeWidth="2"
          />
        </svg>
      )}
    </Icon>
  );
};

export default CatalogIcon;
