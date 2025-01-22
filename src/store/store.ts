import FILTERS from '@constants/filters';
import { atom } from 'jotai';
import FilterList from 'src/model/filter/filterList';

// FilterList 인스턴스를 전역 상태로 관리
export const filterListAtom = atom(() => new FilterList(FILTERS));

export const priceAtom = atom({ minPrice: 0, maxPrice: 30 });

export const contentAtom = atom('');
