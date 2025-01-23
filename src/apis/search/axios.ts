import { privateInstance } from '@apis/instance';
import { DelAllSearchRecordType, DelSearchRecordType } from '@apis/search/type';

export const delSearchRecord = async ({ userId, searchId }: DelSearchRecordType) => {
  const res = await privateInstance.delete('/user/search/record/delete', {
    data: { userId, searchId },
  });

  return res.data;
};

export const delAllSearchRecord = async ({ userId }: DelAllSearchRecordType) => {
  const res = await privateInstance.delete('/user/search/record/deleteAll', {
    data: { userId },
  });

  return res.data;
};

export const getSearchHistory = async (userId: number | null) => {
  const res = await privateInstance.get('/user/search/record', {
    params: { userId },
  });

  return res.data;
};
