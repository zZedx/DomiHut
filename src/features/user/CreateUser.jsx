import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { updateName } from './userSlice';

import Button from '../../ui/Button';

function CreateUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return ;

    dispatch(updateName(username))
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base '>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input mb-8 w-72'
      />

      {username !== '' && (
        <div>
          <Button type={"primary"} addClass={"uppercase"}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
