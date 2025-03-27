import Icon from '@assets/svgs';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import * as styles from './footer.css';

const Footer = () => {
  const { logClickEvent } = useEventLogger('my');

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topBox}>
        <Icon.XSmallLogo />
        <p className={styles.topBoxText}>Copyright 2025. Jeolloga. All rights reserved.</p>
      </div>
      <nav>
        <a
          href="https://www.instagram.com/jeol_lo_ga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noreferrer">
          <Icon.IcnInsta />
        </a>
        <div className={styles.contentContainer}>
          <ul className={styles.contentTitle}>
            <li>대표</li>
            <li>이메일</li>
          </ul>
          <ul className={styles.contentBody}>
            <li>조아영</li>
            <li>jjeolloga@gmail.com</li>
          </ul>
        </div>
      </nav>
      <nav className={styles.bottomContainer}>
        <a
          href="https://www.notion.so/17c7c7beb77880d99c12d8c2375d562d?pvs=4"
          target="_blank"
          rel="noreferrer"
          onClick={() => logClickEvent('click_privacy_policy')}>
          개인정보처리방침
        </a>
        <Icon.IcnDivider />
        <a
          href="https://www.notion.so/17c7c7beb7788007b1d3eb99e0c33e47?pvs=4"
          target="_blank"
          rel="noreferrer"
          onClick={() => logClickEvent('click_terms_of_service')}>
          이용약관
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
