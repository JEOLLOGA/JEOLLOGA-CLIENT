import { queryOptions } from '@tanstack/react-query';

import getTempleImages from './axios';
import { TemplestayImgsResponse } from './type';

const templeImagesQueryOptions = (templestayId: string) =>
  queryOptions<TemplestayImgsResponse>({
    queryKey: ['images', templestayId],
    queryFn: () => getTempleImages(templestayId),
  });

export default templeImagesQueryOptions;
