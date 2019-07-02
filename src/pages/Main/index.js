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
    repositoryInput: '',
    repositories: [],
  };

  handleAddRespository = async (e) => {
    e.preventDefault();

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <img src={Logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRespository}>
          <input
            type="text"
            placeholder="Usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">ok</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}

export default Main;
