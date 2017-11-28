import update from "immutability-helper";

import { actionTypes } from "../../common/constants/actionTypes";
import { PersonEntity, ContentClickEntity } from "../../model";
import { state } from "./index";

export const personsReducer = (state: PersonEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_PERSONS_COMPLETED:
      return handleFetchPersonsCompleted(state, action.payload);
    case actionTypes.CONTENT_ROW_CLICKED:
      return handleRowClicked(state, action.payload);
  }

  return state;
};

const handleFetchPersonsCompleted = (
  state: PersonEntity[],
  payload: PersonEntity[]
) => {
  return payload;
};

const handleRowClicked = (
  state: PersonEntity[],
  payload: ContentClickEntity
) => {
  const personIndex = state.findIndex(p => p.ssn == payload.ssn);
  const scoreIndex = payload.index;
  const newScore = payload.newValue;
  const newState = update(state, {
    [personIndex]: { scoring: { [scoreIndex]: { $set: newScore } } }
  });

  return newState;
};
