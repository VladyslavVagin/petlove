import { useSelector } from "react-redux";
import {
  selectNews,
  selectIsErrorNews,
  selectIsLoadingNews,
  selectTotalPages
} from "../redux/news/selectors";

export const useNews = () => {
  const news = useSelector(selectNews);
  const totalPages = useSelector(selectTotalPages);
  const isLoadingNews = useSelector(selectIsLoadingNews);
  const isErrorNews = useSelector(selectIsErrorNews);

  return { news, isErrorNews, isLoadingNews, totalPages };
};
