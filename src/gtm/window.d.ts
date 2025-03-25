import { DataLayerEvent } from 'src/gtm/types';

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}
