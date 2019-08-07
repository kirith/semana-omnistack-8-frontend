import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './style.sass'

import logo from '../../assets/logo.svg'
import dislike from '../../assets/dislike.svg'
import like from '../../assets/like.svg'
import api from '../../services/api';

const Main = ({ match }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async function () {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id
        }
      })

      setUsers(response.data)
    })()
  }, [match.params.id])

  async function handleLike (id) {
    await api.post(`devs/${id}/likes`, null, {
      headers: {user: match.params.id}
    })

    setUsers(users.filter(({_id}) => _id !== id))
  }

  async function handleDislike (id) {
    await api.post(`devs/${id}/dislikes`, null, {
      headers: {user: match.params.id}
    })

    setUsers(users.filter(({_id}) => _id !== id))
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev"/>
      </Link>
      { users.length ?
        <ul>
          {users.map(({_id, avatar, name, bio}) => (
            <li key={_id}>
              <img src={avatar} alt={name}/>
              <footer>
                <strong>{name}</strong>
                <p>{bio}</p>
              </footer>
              <div className="buttons">
                <button type="button" onClick={() => handleDislike(_id)}>
                  <img src={dislike} alt="dislike" />
                </button>
                <button type="button" onClick={() => handleLike(_id)}>
                  <img src={like} alt="like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      : <div className="empty">Acabou :(</div>}
    </div>
  )
}

export default Main