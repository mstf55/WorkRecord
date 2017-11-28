import * as React from "react";

import { PersonEntity, ContentClickEntity, LookUpEntity } from "../../model";
import { RowContent } from "./rowContent";

interface Props {
  person: PersonEntity;
  onContentClicked: (content: ContentClickEntity) => void;
  selected: LookUpEntity;
}
export const TableContent: React.StatelessComponent<Props> = ({person,selected,onContentClicked}) => {
  return (
    <tr>
      <th>{person.ssn}</th>
      <th>{person.name}</th>
      <th>{person.lastName}</th>
      {person.scoring.map((score, i) => (
        <RowContent
          key={i}
          index={i}
          score={score}
          ssn={person.ssn}
          onContentClicked={onContentClicked}
          selected={selected}
        />
      ))}
    </tr>
  );
};
