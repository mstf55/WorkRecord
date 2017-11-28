import { actionTypes } from "../../common/constants/actionTypes";
import { LookUpEntity } from "../../model";

export const lookUpRowClickedAction = (lookUp: LookUpEntity) => dispatch => {
  dispatch(lookUpRowClicked(lookUp));
};

const lookUpRowClicked = (lookUp: LookUpEntity) => ({
  type: actionTypes.LOOKUP_ROW_CLICKED,
  payload: lookUp
});
