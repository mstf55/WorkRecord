import * as React from "react";

import { ContentClickEntity, LookUpEntity } from "../../model";
import { StyleFactory } from "../../common/utils/styleFactory";

interface Props {
  index: number;
  onContentClicked: (content: ContentClickEntity) => void;
  score: string;
  ssn: number;
  selected: LookUpEntity;
}
export const RowContent: React.StatelessComponent<Props> = props => {
  return (
    <td
      key={props.index}
      className={StyleFactory.getStyle(props.score)}
      onClick={onClickRow(props)}
    >
      {props.score}
    </td>
  );
};

const onClickRow = (props: Props) => () => {
  const { index, score, ssn, selected: { sign } } = props;
  if (score !== sign) {
    props.onContentClicked({
      index: index,
      oldValue: score,
      ssn: ssn,
      newValue: sign
    });
  }
};
