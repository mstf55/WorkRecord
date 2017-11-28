import { actionTypes } from "../../common/constants/actionTypes";
import { ContentClickEntity } from "../../model";

export const contentUpRowClickedAction = (
  contentLook: ContentClickEntity
) => dispatch => {
  dispatch(contentUpRowClicked(contentLook));
};

const contentUpRowClicked = (contentLook: ContentClickEntity) => ({
  type: actionTypes.CONTENT_ROW_CLICKED,
  payload: contentLook
});
