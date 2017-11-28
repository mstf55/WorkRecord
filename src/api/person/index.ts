import { PersonEntity } from '../../model';
import { persons } from './mockDataPersons';

let mockPersons = persons;

const fetchPersons = (): Promise<PersonEntity[]> => {
  return Promise.resolve(mockPersons);
};

export const personAPI = {
  fetchPersons
};
