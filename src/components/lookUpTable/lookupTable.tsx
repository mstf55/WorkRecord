import * as React from "react";

import { LookUpRow } from "./lookUpRow";
import { LookUpEntity } from "../../model/lookUpEntity";
import {appConstants} from './../../common/constants';

interface PropsA {
  onclickRowA: (lookUp: LookUpEntity) => void;
}
export const LookUpTable: React.StatelessComponent<PropsA> = props => {
  return (
    <table className="table table-responsive">
      <tbody>
        <tr>
          <th colSpan={8}>Lookup Table- Click to choose cursor</th>
        </tr>
        {appConstants.lookUps.map((Lookup, i) => (
          <LookUpRow key={i} lookUp={Lookup} onclickRow={props.onclickRowA} />
        ))}
      </tbody>
    </table>
  );
};
