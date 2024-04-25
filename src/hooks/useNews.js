import { useSelector } from "react-redux";
import {
  selectNews,
  selectIsErrorNews,
  selectIsLoadingNews,
} from "../redux/news/selectors";

export const useNews = () => {
  const news = useSelector(selectNews);
  const isLoadingNews = useSelector(selectIsLoadingNews);
  const isErrorNews = useSelector(selectIsErrorNews);

  return { news, isErrorNews, isLoadingNews };
};
