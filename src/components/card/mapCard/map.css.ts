import { style } from '@vanilla-extract/css';
import mapImage from 'src/assets/images/home_card_map.png';

const mapStyle = style({
  width: '28.9rem',
  height: '40.8rem',
  backgroundImage: `url(${mapImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
});

export default mapStyle;
