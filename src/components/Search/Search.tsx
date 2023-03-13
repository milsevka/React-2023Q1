import React from 'react';
import { ISearch } from '../../types/types';
import './Search.css';
// eslint-disable-next-line @typescript-eslint/ban-types
export class Search extends React.Component<{}, { search: string }> {
  constructor(props: ISearch) {
    super(props);
    this.state = {
      search: '',
    };
  }

  onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: e.target.value });
  };

  componentWillUnmount() {
    localStorage.setItem('search', this.state.search);
  }

  componentDidMount() {
    this.setState({
      search: (localStorage.getItem('search') as string) || 'Http cats',
    });
  }

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={this.state.search}
          onChange={this.onValueChange}
        />
      </div>
    );
  }
}
