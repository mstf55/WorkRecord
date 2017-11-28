import update from "immutability-helper";

import { actionTypes } from "../../common/constants/actionTypes";
import { ContentClickEntity, SummaryEntity, PersonEntity } from "../../model";

const createDefault = (): SummaryEntity => ({
  o: 0,
  e: 0,
  t: 0
});
export const summaryReducer = (
  state: SummaryEntity = createDefault(),
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_PERSONS_COMPLETED:
      return handleFetchPersonsCompleted(state, action.payload);
    case actionTypes.CONTENT_ROW_CLICKED:
      return handleRowClicked(state, action.payload);
  }

  return state;
};

const handleFetchPersonsCompleted = (
  state: SummaryEntity,
  payload: PersonEntity[]
) => {
  const initialValues = payload
    .reduce((accumulator, current) => [...accumulator, ...current.scoring], [])
    .reduce((accumulator, current) => {
      return Object.assign({}, accumulator, {
        [current]: !accumulator[current] ? 1 : accumulator[current] + 1
      });
    }, {});
  const newState = Object.assign({}, state, { ...initialValues });

  return newState;
};

const handleRowClicked = (
  state: SummaryEntity,
  payload: ContentClickEntity
) => {
  const incrementedValue = payload.newValue.toString();
  const decrementedValue = payload.oldValue.toString();
  const newState = Object.assign({}, state, {
    [incrementedValue]: state[incrementedValue] + 1,
    [decrementedValue]: state[decrementedValue] - 1
  });
  return newState;
};
