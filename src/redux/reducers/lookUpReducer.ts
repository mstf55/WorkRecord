import { actionTypes } from "../../common/constants/actionTypes";
import { LookUpEntity } from "../../model";

const createDefault = (): LookUpEntity => ({
  text: "Worked",
  color: "green",
  sign: "o"
});

export const LookUpReducer = (
  state: LookUpEntity = createDefault(),
  action
) => {
  switch (action.type) {
    case actionTypes.LOOKUP_ROW_CLICKED:
      return handleLookUpRowClicked(state, action.payload);
  }

  return state;
};

const handleLookUpRowClicked = (state: LookUpEntity, payload: LookUpEntity) => {
  return payload;
};
