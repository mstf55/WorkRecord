import * as React from "react";

import { LookUpEntity } from "../../model";

interface State {
  x: number;
  y: number;
}
interface Props {
  selected: LookUpEntity;
}
export default class Marker extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = ({ pageX: x, pageY: y }) => {
    this.setState({ x, y });
  };

  render() {
    const { x, y } = this.state;
    const{selected}=this.props;    
    
    var style = {
      backgroundColor:selected.color,
      transform: `translate3d(${x}px, ${y}px, 0)`
    };
    return (
      <span className="markerme" style={style}>
        {selected.sign}
      </span>
    );
  }
}
