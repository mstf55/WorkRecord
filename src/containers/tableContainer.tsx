import * as React from "react";
import { connect } from "react-redux";

import { State } from "../redux/reducers";
import {
  fetchPersonsAction,
  lookUpRowClickedAction,
  contentUpRowClickedAction
} from "../redux/actions";
import Table from "../components/generalComponents/table";
import { LookUpEntity, ContentClickEntity } from "../model/index";

const mapStateToProps = ({ persons, activeLookUp, summary }) => ({
  persons,
  selected: activeLookUp,
  summary
});

const mapDispatchToProps = dispatch => ({
  fetchAllPersons: () => dispatch(fetchPersonsAction()),
  lookUpRowClicked: (lookUp: LookUpEntity) =>
    dispatch(lookUpRowClickedAction(lookUp)),
  contentRowClicked: (content: ContentClickEntity) =>
    dispatch(contentUpRowClickedAction(content))
});

export const TableContainer = connect(mapStateToProps, mapDispatchToProps)(
  Table
);
