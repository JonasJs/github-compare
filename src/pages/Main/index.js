import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

// Components
import CompareList from '../../components/CompareList';

// Assets
import Logo from '../../assets/images/logo.png';

// Styles
import { Container, Form } from './styles';

class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
    loading: false,
  };

  handleAddRespository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        repositoryError: false,
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={Logo} alt="Github Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRespository}>
          <input
            type="text"
            placeholder="Usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}

export default Main;
