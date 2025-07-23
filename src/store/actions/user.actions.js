import { getMe } from "../../apis/users";

import { userRequest, userSuccess, userFailure, userLogout } from "../slices/UserSlice";

const fetchUser = () => async (dispatch) => {
  try {
    dispatch(userRequest());
    const user = await getMe();
    if (user.status === 200) {
      dispatch(userSuccess(user.data.result));
    }
  } catch (error) {
    console.log({ error });
    dispatch(userFailure(error.data.response.result));
  }
};

export default fetchUser;
