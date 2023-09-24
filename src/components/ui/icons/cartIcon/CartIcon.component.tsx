import Link from '@components/ui/link/Link.component';
import { ROUTES } from '@constants/routes';
import { FC, useState } from 'react';
import { IIcon } from '../icon/icon';
import Icon from '../icon/icon.component';
import css from './CartIcon.module.css';

const CartIcon: FC<IIcon> = ({ filled, ...props }) => {
  const [product, setProduct] = useState(0);
  return (
    <Link to={ROUTES.CART_ROUTE}>
      <Icon>
        <div id={css.cart} onClick={() => setProduct(product < 99 ? product + 1 : product)}>
          <svg
            {...props}
            width="50"
            height="41"
            viewBox="0 0 50 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.64446C6.5 1 8.75267 1.64446 8.75267 1.64446L10.3488 9.42825M10.3488 9.42825L14.7825 31.0499H16.5053M10.3488 9.42825H24.6474H31.7968C31.7968 9.42825 37.1772 9.42825 40.6248 9.42825C42.7239 9.42825 45 9.35649 46 9.42825C47 9.5 49.5 10 48 14C46.5 18 42.3476 31.0499 42.3476 31.0499H40.6248M19.951 31.0499H16.5053M19.951 31.0499C21.4304 31.8999 22.0161 32.4602 22.5352 33.6445C23.0119 35.0624 23.0546 35.8266 22.5352 37.104C21.8665 38.5273 21.3203 39.0837 19.951 39.6985C18.59 40.1032 17.8326 40.098 16.5053 39.6985C15.1698 39.0491 14.6101 38.4729 13.9211 37.104C13.4015 35.7514 13.3809 34.9968 13.9211 33.6445C14.4655 32.272 15.0532 31.6875 16.5053 31.0499M19.951 31.0499H37.1791M37.1791 31.0499H40.6248M37.1791 31.0499C35.8509 31.7731 35.2772 32.3335 34.5949 33.6445C34.1364 35.0518 34.0958 35.8153 34.5949 37.104C35.1801 38.3826 35.735 38.958 37.1791 39.6985C38.4877 40.0508 39.2422 40.0504 40.6248 39.6985C41.8959 39.1136 42.4539 38.5327 43.209 37.104C43.7083 35.8473 43.6587 35.0795 43.209 33.6445C42.594 32.3411 42.012 31.7846 40.6248 31.0499M29.5651 12.0228V17.212M29.5651 27.5904V23.2661M20.951 12.0228L21.8124 17.212M23.5352 27.5904L22.8174 23.2661M35.5949 27.5904L36.0735 23.2661M37.3177 12.0228L36.7435 17.212M15.7825 17.212H21.8124M42.4862 17.212H36.7435M17.5053 23.2661H22.8174M40.7634 23.2661H36.0735M22.8174 23.2661L21.8124 17.212M22.8174 23.2661H29.5651M21.8124 17.212H29.5651M29.5651 17.212H36.7435M29.5651 17.212V23.2661M36.7435 17.212L36.0735 23.2661M36.0735 23.2661H29.5651"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {!!product && (
            <div id={css.productCountContainer}>
              <span id={css.productCount}>{product}</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8.5" fill="#FF0000" stroke="black" />
              </svg>
            </div>
          )}
        </div>
      </Icon>
    </Link>
  );
};

export default CartIcon;
