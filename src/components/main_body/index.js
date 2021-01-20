import React, { Component } from "react";
import api from '../../Api.js'
import '../../../src/style.css'
import './styles.css'

export default class MainBody extends Component {

  constructor(props) {
    super()
    this.state = {
      info: {
        name: null,
        bio: null,
        project_description: null,
        blog_link: null,
        github_link: null
      },
      repositories: [],
      repo_languages: [],
      functional_repos: [
        {
          id: 287092866,
          img: 'https://andrelara2002.github.io/image/cards/calc_orc.svg'
        },
        {
          id: 316390511,
          img: 'https://andrelara2002.github.io/image/cards/card_empty_list.svg'
        }
      ]
    }
  }

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    const data = (await api.get('users/andrelara2002')).data
    const repos = (await api.get('users/andrelara2002/repos')).data
    const state = this.state

    state.info.bio = data.bio
    state.info.name = data.name
    state.info.blog_link = data.blog
    state.info.github_link = data.html_url

    state.repositories = repos

    this.setState(state)
  }

  generateRepositories = () => {
    return this.state.repositories.map((value, idx) => {
      return (
        <article key={idx} className='application_box'>

          <div className='left'>
            {this.state.functional_repos.filter(obj => obj.id === value.id).map(filteredObj => (
              <img src={filteredObj.img} alt='error' />
            ))}
          </div>
          <div className='right'>
            <h2>{value.name}</h2>
            <p>{value.description}</p>
            <button className='default_button' onClick={() => { window.open(value.html_url, '_blank') }}>Github</button>
            {this.getLink(value)}
          </div>
        </article>
      )
    })
  }

  getLink = value => {
    if (value.homepage !== null) {
      return <button className='special_button' onClick={() => { window.open(`https://${value.homepage}`, '_blank') }}>Acessar</button>
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Develop</h1>
          <nav>
            <ul>
              <li key='1'>Sobre mim</li>
              <li key='2'>Portfolio</li>
              <li key='3'>Contato</li>
            </ul>
          </nav>
        </header>

        <article className="alertas">
          <h2>Versões em React.js estão chegando!</h2>
        </article>

        <div className="main">
          <div className="welcome">
            <h1>Olá seja bem vindo</h1>
            <h2>Esse sou eu:</h2>

            <section className="container">
              <div className="card">
                <div className="card-header">
                  <img src={'https://andrelara2002.github.io/image/minha-foto.gif'} alt={'André'} />
                  <div className="card-header-text">
                    <strong>{this.state.info.name}</strong>
                    <p>Desenvolvedor</p>
                  </div>
                </div>
                <p>
                  {this.state.info.bio}
                </p>
              </div>
            </section>
            <section className='portfolio'>
              <h1>Meus Projetos</h1>
              <ul className='portfolio-list'>
                {this.generateRepositories()}
              </ul>
            </section>

          </div>
          <footer>
            <button onClick={() => { window.open(this.state.info.blog_link) }}>Linkedin</button>
            <button onClick={() => { window.open(this.state.info.github_link) }}>Github</button>
          </footer>
        </div>
      </div>
    );
  }
}
