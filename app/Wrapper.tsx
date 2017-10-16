import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

// styling
import './scss/index.scss';

interface Props {}

interface State {}

export default class Wrapper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
