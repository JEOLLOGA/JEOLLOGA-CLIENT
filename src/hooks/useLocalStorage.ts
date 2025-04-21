'use client';
import { useEffect, useState } from 'react';

interface SearchHistoryItem {
  searchId: number;
  content: string;
}

export const getStorageValue = (key: string) => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(key);
};

const useLocalStorage = () => {
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>(() => {
    const data = getStorageValue('searchHistory');
    try {
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  // 검색어 저장
  const addStorageValue = (searchQuery: string) => {
    // 중복된 검색어는 저장 안 하도록, 최대 10개까지만
    const updatedHistory = [
      { searchId: new Date().getTime(), content: searchQuery },
      ...searchHistory.filter((item) => item.content !== searchQuery),
    ].slice(0, 10);

    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  // 검색어 삭제
  const delStorageValue = (searchId: number) => {
    const updatedHistory = searchHistory.filter((item) => item.searchId !== searchId);
    setSearchHistory(updatedHistory);
  };

  // 검색 기록 전체 삭제
  const clearStorageValue = () => {
    localStorage.removeItem('searchHistory');
    setSearchHistory([]);
  };

  return {
    searchHistory,
    setSearchHistory,
    getStorageValue,
    addStorageValue,
    delStorageValue,
    clearStorageValue,
  };
};

export default useLocalStorage;
