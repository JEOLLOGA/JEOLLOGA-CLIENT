import { FilterData } from '@apis/filter/type';
import instance from '@apis/instance';
import MESSAGES from '@apis/messages';
import { isAxiosError } from 'axios';

export const fetchFilteredList = async (filterData: FilterData, page: number, userId: number) => {
  try {
    const response = await instance.post(`/filter/list?page=${page}&userId=${userId}`, {
      ...filterData,
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else throw new Error(MESSAGES.UNKNOWN_ERROR);
  }
};

export const fetchFilteredCount = async (filterData: FilterData) => {
  try {
    const response = await instance.post('/public/filter/count', {
      ...filterData,
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else throw new Error(MESSAGES.UNKNOWN_ERROR);
  }
};
