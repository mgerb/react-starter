import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './home.scss';

interface Props extends RouteComponentProps<any> {}

interface State {}

export class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return <div className="Home">test 123456</div>;
  }
}
