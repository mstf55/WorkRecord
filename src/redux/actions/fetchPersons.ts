import { actionTypes } from "../../common/constants/actionTypes";
import { PersonEntity } from "../../model";
import { personAPI } from "../../api/person";

export const fetchPersonsAction = () => dispatch => {
  personAPI.fetchPersons().then(persons => {
    dispatch(fetchPersonsCompleted(persons));
  });
};

const fetchPersonsCompleted = (persons: PersonEntity[]) => ({
  type: actionTypes.FETCH_PERSONS_COMPLETED,
  payload: persons
});
