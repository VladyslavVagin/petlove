import { useSelector } from "react-redux";
import {
  selectCategories,
  selectNotices,
  selectIsError,
  selectIsLoading,
  selectGender,
  selectSpecies,
  selectCities,
  selectTotalPagesNotices
} from "../redux/notices/selectors";

export const useNotices = () => {
    const categories = useSelector(selectCategories);
    const genders = useSelector(selectGender);
    const species = useSelector(selectSpecies);
    const cities = useSelector(selectCities);
    const notices = useSelector(selectNotices);
    const isErrorNotices = useSelector(selectIsError);
    const isLoadNotices = useSelector(selectIsLoading);
    const totalPagesNotices = useSelector(selectTotalPagesNotices);
  
    return { categories, isLoadNotices, isErrorNotices, notices, genders, species, cities, totalPagesNotices };
  };
