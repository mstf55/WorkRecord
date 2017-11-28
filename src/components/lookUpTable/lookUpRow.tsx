import * as React from "react";

import { LookUpEntity } from "../../model";
import { StyleFactory } from "../../common/utils/styleFactory";

interface Props {
  lookUp: LookUpEntity;
  onclickRow: (lookUp: LookUpEntity) => void;
}
export const LookUpRow: React.StatelessComponent<Props> = ({lookUp,onclickRow}) => {
  return (
    <tr>
      <th>{lookUp.text}</th>
      <td
        className={StyleFactory.getStyle(lookUp.sign)}
        onClick={() => onclickRow(lookUp)}
      >
        {lookUp.sign}
      </td>
    </tr>
  );
};
