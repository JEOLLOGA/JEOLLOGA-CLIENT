import { FilterType, PriceType } from '@apis/filter/type';
import instance, { getAxiosInstance } from '@apis/instance';
import MESSAGES from '@apis/messages';
import { isAxiosError } from 'axios';

export const fetchFilteredList = async (
  filterData: FilterType & { price: PriceType; content: string },
  page: number,
  userId?: string,
) => {
  const axiosInstance = getAxiosInstance();

  try {
    const response = await axiosInstance.post(`/search?page=${page}&userId=${userId}`, {
      ...filterData,
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else throw new Error(MESSAGES.UNKNOWN_ERROR);
  }
};

export const fetchFilteredCount = async (
  filterData: FilterType & { price: PriceType; content: string },
) => {
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
