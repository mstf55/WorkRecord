import * as React from "react";

import { LookUpTable } from "../lookUpTable";
import {appConstants} from './../../common/constants';
import { TableContent, TableHeader, SummaryRow } from "../personTable";
import Marker from "./marker";
import {
  PersonEntity,
  LookUpEntity,
  ContentClickEntity,
  SummaryEntity
} from "../../model";

interface Props {
  persons: PersonEntity[];
  fetchAllPersons(): void;
  lookUpRowClicked(lookUp: LookUpEntity);
  selected: LookUpEntity;
  contentRowClicked(content: ContentClickEntity);
  summary: SummaryEntity;
}

export default class Table extends React.Component<Props, {}> {
  constructor() {
    super();

    this.onLookUpRowClicked = this.onLookUpRowClicked.bind(this);
    this.onContentUpRowClicked = this.onContentUpRowClicked.bind(this);
  }

  public componentDidMount() {
    this.props.fetchAllPersons();
  }
  private onLookUpRowClicked(lookUp: LookUpEntity) {
    this.props.lookUpRowClicked(lookUp);
  }

  private onContentUpRowClicked(content: ContentClickEntity) {
    this.props.contentRowClicked(content);
  }
  render() {
    const { selected, summary, persons } = this.props;
    return (
      <div className="card">
        <Marker selected={selected} />
        <div className="card-header">
          <h1 className="jumbotron">Employee work record</h1>
        </div>
        <div className="card-body">
          <div className="card-block">
            <table className="table table-responsive">
              <tbody>
                <TableHeader numberOfDays={appConstants.numberOfDays} />
                {persons.map(person => (
                  <TableContent
                    onContentClicked={this.onContentUpRowClicked}
                    key={person.ssn}
                    person={person}
                    selected={selected}
                  />
                ))}
                <SummaryRow summary={summary} />
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer">
          <LookUpTable onclickRowA={this.onLookUpRowClicked} />
        </div>
      </div>
    );
  }
}
