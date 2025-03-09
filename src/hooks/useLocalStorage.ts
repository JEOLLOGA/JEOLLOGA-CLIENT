import { useState } from 'react';

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

  // 검색어 저장
  const addSearchHistory = (searchQuery: string) => {
    // 중복된 검색어는 저장 안 하도록, 최대 10개까지만
    const updatedHistory = [
      { searchId: new Date().getTime(), content: searchQuery },
      ...searchHistory.filter((item) => item.content !== searchQuery),
    ].slice(0, 10);

    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  // 검색어 삭제
  const delSearchHistory = (searchId: number) => {
    const searchHistory: { searchId: number; content: string }[] = getStorageValue('searchHistory');
    const updatedHistory = searchHistory.filter((item) => item.searchId !== searchId);

    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  return {
    searchHistory,
    setSearchHistory,
    getStorageValue,
    addSearchHistory,
    delSearchHistory,
  };
};

export default useLocalStorage;
