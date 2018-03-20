import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavBar } from './components';
import { Home, NotFound } from './pages';

// styling
import './scss/index.scss';

interface Props {}

interface State {}

export class Routes extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
