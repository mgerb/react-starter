import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Home.scss';

interface Props extends RouteComponentProps<any> {}

interface State {}

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <div className="Home">test 123</div>;
  }
}
