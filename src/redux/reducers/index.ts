import { combineReducers } from "redux";

import { PersonEntity, LookUpEntity, SummaryEntity } from "../../model";
import { personsReducer } from "./personReducer";
import { LookUpReducer } from "./lookupReducer";
import { summaryReducer } from "./summaryReducer";

export interface State {
  persons: PersonEntity[];
  activeLookUp: LookUpEntity;
  summary: SummaryEntity;
}

export const state = combineReducers<State>({
  persons: personsReducer,
  activeLookUp: LookUpReducer,
  summary: summaryReducer
});
