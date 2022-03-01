import React from "react";
import "./style.css";

import RepoList from "./components/repoList";
import Spacer from "./components/spacer";
import { getUserInfo, getRepos } from "./services/github_api/Api";
import site_hero from './img/site_hero.svg'
import profile_picture from './img/profile_foto.jpg'

export default function App() {

  const [isLoading, setLoading] = React.useState(true);
  const [userInfo, setUserInfo] = React.useState()
  const TIME_TO_UPDATE_IN_SECONDS = 5;

  const { innerHeight, innerWidth } = window
  const ratio = innerWidth / innerHeight

  const getData = async () => {
    const user = await getUserInfo()
    const repos = await getRepos()

    if (user.status === 200 && repos.status === 200) {
      setUserInfo({ ...user.data, repos: [...repos.data] })
    }
  }

  React.useEffect(() => {
    if (!userInfo) {
      getData()
      setInterval(() => {
        getData()
      }, TIME_TO_UPDATE_IN_SECONDS * 1000)
    }
    else {
      setLoading(false)
      console.log(userInfo)
    }
  }, [userInfo])


  //Verify if data is fully loaded
  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  else {
    return (
      <div className="main">
        <section className="site-hero">
          <img src={site_hero} style={{ width: ratio >= 2 ? innerWidth / 2 : innerWidth }} />
        </section>
        <Spacer size={100} />
        <section className="divide-flex">
          <div className="bio-container">
            <h1>Quem sou eu?</h1>
            <p
              className="bio"
              style={{ width: innerWidth > 800 ? innerWidth / 4 : '100%' }}
            >{userInfo.bio}</p>
            <div className="gap-between">
              <button className="button linkedin">Linkedin</button>
              <button className="button github">Github</button>
              <button className="button email">Email</button>
            </div>
          </div>
          <img hidden={innerWidth > 800 ? false : true} src={profile_picture} />
        </section>
        <Spacer size={100} />
        <RepoList repos={userInfo.repos} />
      </div>
    );
  }
}
