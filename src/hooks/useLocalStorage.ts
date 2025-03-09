import { useEffect, useState } from 'react';

interface SearchHistoryItem {
  searchId: number;
  content: string;
}

const useLocalStorage = () => {
  const getStorageValue = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  };

  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>(() => {
    return getStorageValue('searchHistory');
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  // 검색어 저장
  const addStorageValue = (searchQuery: string) => {
    // 중복된 검색어는 저장 안 하도록, 최대 10개까지만
    const updatedHistory = [
      { searchId: new Date().getTime(), content: searchQuery },
      ...getStorageValue('searchHistory').filter(
        (item: SearchHistoryItem) => item.content !== searchQuery,
      ),
    ].slice(0, 10);

    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  // 검색어 삭제
  const delStorageValue = (searchId: number) => {
    const searchHistory: { searchId: number; content: string }[] = getStorageValue('searchHistory');
    const updatedHistory = searchHistory.filter((item) => item.searchId !== searchId);

    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  return {
    searchHistory,
    setSearchHistory,
    getStorageValue,
    addStorageValue,
    delStorageValue,
  };
};

export default useLocalStorage;
