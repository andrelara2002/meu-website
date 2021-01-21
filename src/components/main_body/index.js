import React, { Component } from "react";
import api from '../../services/github_api/Api.js'
import '../../../src/style.css'
import './styles.scss'

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
          name: "Calculo de Orçamento",
          id: 292434436,
          img: "https://raw.githubusercontent.com/andrelara2002/Little-Database/3e26d3cc454a5b72443bcc7cb376da55a7823f8e/Images/calc_orc.svg?token=AP2P7T56KDON2HWXWYJGP53ABCEIC"
        },
        {
          name: "Empty List Mini",
          id: 285613569,
          img: "https://raw.githubusercontent.com/andrelara2002/Little-Database/38d1fd3725bb89238cd86559e03741a5f0d79bdc/Images/card_empty_list.svg?token=AP2P7T3I32MO5JBJSOKPSYLABB2TO"
        },
        {
          name: "Empty List Full",
          id: 320284528,
          img: "https://raw.githubusercontent.com/andrelara2002/Little-Database/3e26d3cc454a5b72443bcc7cb376da55a7823f8e/Images/empty-list-logo.svg?token=AP2P7TZL57LTJZR7LAGJ2J3ABB3M2"
        },
        {
          name: "GitHub Profile Hunter",
          id: 277896747,
          img: ""
        },
        {
          name: "Calculo de ROI",
          id: 287149349,
          img: ""
        },
        {
          name: "Health Track",
          id: 269186188,
          img: ""
        },
        {
          name: "Heath Track Java",
          id: 292317860,
          img: ""
        },
        {
          name: "Lejour Dashboard",
          id: 312901896,
          img: ""
        },
        {
          name: "Calculadora ReactJs",
          id: 316390511,
          img: ""
        },
        {
          name: "Color Spectre",
          id: 318261453,
          img: ""
        },
        {
          name: "Contagem Regressiva",
          id: 320376618,
          img: ""
        },
        {
          name: "Conversor Binário",
          id: 316108409,
          img: ""
        },
        {
          name: "Conversor CSV",
          id: 320386429,
          img: ""
        },
        {
          name: "Gerador de Border Radius",
          id: 316078558,
          img: ""
        },
        {
          name: "Luzes de Natal",
          id: 317869493,
          img: ""
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
      if (value.name.includes('andrelara2002') === false) {
        return (
          <article key={idx} className='application_box'>

            <div className='left' >
              {this.state.functional_repos.filter(obj => obj.id === value.id).map(filteredObj => (
                <img src={filteredObj.img} alt='' />
              ))}
            </div>
            <div className='right'>
              {this.selectText(value)}
              <p>{value.description}</p>
              <button className='default_button' onClick={() => { window.open(value.html_url, '_blank') }}>Github</button>
              {this.getLink(value)}
            </div>
          </article>
        )
      }
    })
  }

  getLink = value => {
    if (value.homepage !== null) {
      return <button className='special_button' onClick={() => { window.open(`${value.homepage}`, '_blank') }}>Acessar</button>
    }
  }

  selectText = (value) => {
    let string_
    let language_

    if (value.name.includes('-ReactJs')) {
      string_ = value.name.replace('-ReactJs', '')
      language_ = 'REACTJS'
    }
    else if (value.name.includes('-JAVA')) {
      string_ = value.name.replace('-JAVA', '')
      language_ = 'JAVA'
    }
    else if (value.name.includes('-HTML')) {
      string_ = value.name.replace('-HTML', '')
      language_ = 'HTML'
    }
    else if (value.name.includes('-PYTHON')) {
      string_ = value.name.replace('-PYTHON', '')
      language_ = 'PYTHON'
    }
    else if (value.name.includes('-PYTHON')) {
      string_ = value.name.replace('-PYTHON', '')
      language_ = 'PYTHON'
    }
    else {
      string_ = value.name
    }
    while (string_.includes('_') || string_.includes('-')) {
      string_ = string_.replace('_', ' ')
      string_ = string_.replace('-', ' ')
    }
    return <h2 className='card-title'>{string_}<strong className={'outline-box ' + language_}>{language_}</strong></h2>
  }

  render() {
    return (
      <div>

        <article className="alertas">
          <h2>Versões em React.js estão chegando!</h2>
        </article>

        <div className="main">
          <div className="welcome">
            <section className="container">
              <div className='inner-container'>
                <div>
                  <h1>
                    Este sou eu
                </h1>
                </div>
                <div className="card">
                  <div className="card-header">
                    <img src={'https://andrelara2002.github.io/image/minha-foto.gif'} alt={'André'} />
                    <div className="card-header-text">
                      <h2>{this.state.info.name}</h2>
                      <strong>Desenvolvedor</strong>
                    </div>
                  </div>
                  <p>
                    {this.state.info.bio}
                  </p>
                </div>
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
