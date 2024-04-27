import { useSelector } from "react-redux";
import {
  selectCategories,
  selectNotices,
  selectIsError,
  selectIsLoading,
  selectGender,
} from "../redux/notices/selectors";

export const useNotices = () => {
    const categories = useSelector(selectCategories);
    const genders = useSelector(selectGender);
    const notices = useSelector(selectNotices);
    const isErrorNotices = useSelector(selectIsError);
    const isLoadNotices = useSelector(selectIsLoading);
  
    return { categories, isLoadNotices, isErrorNotices, notices, genders };
  };
