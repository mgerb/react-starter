import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './not-found.scss';

interface Props extends RouteComponentProps<any> {}

interface State {}

export class NotFound extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return <div className="not-found">404 Not Found</div>;
  }
}
