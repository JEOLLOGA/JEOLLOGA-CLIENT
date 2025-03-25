export interface BaseDataLayerEvent {
  event: string;
}

export interface ClickEvent extends BaseDataLayerEvent {
  event: string;
  screen: string;
  label?: string;
  [key: string]: unknown;
}

export interface PageViewEvent extends BaseDataLayerEvent {
  event: 'page_view';
  pagePath: string;
  [key: string]: unknown;
}

export interface GtmStartEvent extends BaseDataLayerEvent {
  event: 'gtm.js';
  'gtm.start': number;
  [key: string]: unknown;
}

export type DataLayerEvent = ClickEvent | PageViewEvent | GtmStartEvent;
