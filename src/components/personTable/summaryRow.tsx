import * as React from "react";

import { SummaryEntity } from "../../model/summaryEntity";

interface Props {
  summary: SummaryEntity;
}
export const SummaryRow: React.StatelessComponent<Props> = ({ summary }) => {
  return (
    <tr>
      <th colSpan={3}>Summary</th>
      <th colSpan={4}>Worked</th>
      <th>{summary.o}</th>
      <th colSpan={4}>Exc. absence</th>
      <th>{summary.e}</th>
      <th colSpan={4}>Take off</th>
      <th>{summary.t}</th>
    </tr>
  );
};
