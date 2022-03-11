import React from "react"

import { getRepoLanguages } from "../services/github_api/Api";
import languageColors from '../services/languageColors.json'

export default function repoList(props) {
    const deviceWidth = window.innerWidth
    const { repos } = props;
    const [query, setQuery] = React.useState('')
    const [filteredRepos, setFilteredRepos] = React.useState([])

    const handleWebsite = (website) => {
        if (website) {
            window.open(website, "_blank")
        }
    }

    const handleSearch = async (text) => {
        if (text.length > 0) {
            await setQuery(text);
            const _repos = repos.filter(x => {
                const regExp = new RegExp(query, 'i')
                if (x.name.match(regExp)) {
                    return x.name
                }
            })
            if (_repos.length > 0) {
                await setFilteredRepos(_repos)
            }
            else {
                await setFilteredRepos([])
            }
        }
        else setFilteredRepos(repos)
    }

    const renderRepos = () => {
        const _repos = filteredRepos.length > 0 ? filteredRepos : repos
        if (filteredRepos.length <= 0 && query.length > 0) {
            return (
                <div className="card">
                    <p>Nenhum repositório encontrado</p>
                </div>
            )
        }
        return _repos.map((item, idx) => {
            let { full_name, description,
                language, html_url, homepage, created_at } = item;

            //Cleaning name from user name
            let name = full_name.replaceAll('andrelara2002/', '');
            //Converting "-"" and "_" to spaces
            name = name.replace('-', ' ').replaceAll('_', ' ');

            const languageColor = languageColors.filter(x => {
                if (x.name === language) {
                    return x.color
                }
            })
            return <li key={idx} className='card'>
                <div className="header">
                    <h3 className="title">{name}</h3>
                </div>
                <p className="description">{description}</p>
                <h4 className="language"><div style={{
                    backgroundColor: languageColor[0] != undefined ? languageColor[0].color : "#fff",
                    width: 10,
                    height: 10,
                    borderRadius: 50
                }} />{language || 'Nenhuma'}</h4>
                <div className='button-divisor'>
                    <a href={html_url} target='_blank'>Saiba mais</a>
                    <button onClick={() => { handleWebsite(homepage) }} className={`button ${homepage ? 'enabled' : 'disabled'}`}>Acessar</button>
                </div>
            </li>
        })
    }

    if (!repos) {
        return <>
            <h1>
                Nenhum repositório encontrado
            </h1>
        </>
    }
    else {
        return <div>
            <input
                type={'text'}
                placeholder={'Pesquise um projeto'}
                onChange={text => { handleSearch(text.target.value) }}
                style={
                    {
                        width: deviceWidth < 700 ? "80vw" : 400,
                        alignSelf: deviceWidth < 700 ? 'center' : "flex-start"
                    }
                } />
            <ul className="grid-view">
                {renderRepos()}
            </ul>
        </div>
    }
}