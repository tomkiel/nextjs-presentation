import { Wrapper } from '@components/organisms/Wrapper/Wrapper';
import Store from '@components/svg/store.svg';

import "./Logo.scss";

export function Logo() {
  return <Wrapper className='app-logo'>
    <Store />
  </Wrapper>;
}