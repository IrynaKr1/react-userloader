import { Component } from 'react';
import getUsers from './api/index.js';
import UsersListItem from './UsersListItem';
import '../../reset.css';
import styles from './UserCards.module.scss';

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 1,
      genderFilter: 'all',
    };
  }

  loadUsers = () => {
    const { currentPage } = this.state;
    this.setState({ isFetching: true });

    getUsers({
      page: currentPage,
      results: 6,
    })
      .then((data) => this.setState({ users: data.results }))
      .catch((e) => this.setState({ error: e }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount() {
    this.loadUsers();
  }

  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  prevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  setGenderFilter = (gender) => {
    this.setState({
      genderFilter: gender,
      currentPage: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, genderFilter } = this.state;
    if (
      currentPage != prevState.currentPage ||
      genderFilter !== prevState.genderFilter
    ) {
      this.loadUsers();
    }
  }

  getFilteredUsers = () => {
    const { users, genderFilter } = this.state;
    if (genderFilter === 'all') {
      return users;
    }
    return users.filter((user) => user.gender === genderFilter);
  };

  mapUser = (u) => {
    return <UsersListItem key={u.login.uuid} user={u} />;
  };

  render() {
    const { isFetching, error } = this.state;
    const filteredUsers = this.getFilteredUsers();
    return (
      <>
        <button onClick={this.prevPage}>{'<'}</button>
        <button onClick={this.nextPage}>{'>'}</button>
        <button onClick={() => this.setGenderFilter('all')}>All</button>
        <button onClick={() => this.setGenderFilter('male')}>Male</button>
        <button onClick={() => this.setGenderFilter('female')}>Female</button>
        {error && <div>!!!Error!!!</div>}
        {isFetching && <div>Loading, please wait!</div>}
        {!error && !isFetching && (
          <ul className={styles.userList}>{filteredUsers.map(this.mapUser)}</ul>
        )}
      </>
    );
  }
}
export default UsersLoader;
