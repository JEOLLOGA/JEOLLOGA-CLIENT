import { FilterOptions } from '@apis/filter/type';
import instance from '@apis/instance';

const getfilterOptions = async () => {
  const response = await instance.get<FilterOptions>('/public/filter');
  return response;
};

export default getfilterOptions;
