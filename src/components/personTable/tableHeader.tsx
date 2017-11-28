import * as React from "react";

interface Props {
  numberOfDays: number;
}
export const TableHeader: React.StatelessComponent<Props> = ({
  numberOfDays
}) => {
  const numberOfDaysColumn = new Array(numberOfDays)
    .fill("")
    .map((item, index) => {
      return <th key={index}>{index + 1}</th>;
    });

  return (
    <tr>
      <th>SSN</th>
      <th>Name</th>
      <th>Last Name</th>
      {numberOfDaysColumn}
    </tr>
  );
};
