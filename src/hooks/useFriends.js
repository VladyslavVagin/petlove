import { useSelector } from "react-redux";
import {
  selectFriends,
  selectIsErrorFriends,
  selectIsLoadingFriends,
} from "../redux/friends/selectors";

export const useFriends = () => {
  const friends = useSelector(selectFriends);
  const isLoadFriends = useSelector(selectIsLoadingFriends);
  const isErrorFriends = useSelector(selectIsErrorFriends);

  return { friends, isLoadFriends, isErrorFriends };
};
