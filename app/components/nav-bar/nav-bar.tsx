import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav-bar.scss';

interface Props {}

interface State {}

export class NavBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <div className="nav-bar__header">
          <span>React Starter</span>
          <a href="https://github.com/mgerb/react-webpack2-seed">
            GitHub
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </div>

        <div className="nav-bar__nav">
          <NavLink to="/" className="nav-bar__item" exact activeClassName="nav-bar__item--active">
            Home
          </NavLink>
          <NavLink to="/new" className="nav-bar__item" exact activeClassName="nav-bar__item--active">
            New
          </NavLink>
        </div>
      </div>
    );
  }
}
