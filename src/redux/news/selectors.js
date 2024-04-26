export const selectNews = state => state.news.news;

export const selectTotalPages = state => state.news.totalPages;

export const selectIsLoadingNews = state => state.news.isLoading;

export const selectIsErrorNews = state => state.news.isError;