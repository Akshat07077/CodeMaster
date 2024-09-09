'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import useHasMounted from '../hooks/useHasMounted';

const Page = () => {
  const [inputs, setInputs] = useState({
    id: '',
    title: '',
    difficulty: '',
    category: '',
    link: '',
    likes: 0,
    dislikes: 0,
    order: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert('Failed to save to DB');
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const hasMounted = useHasMounted();

	if (!hasMounted) return null;

  return (
    <>
      <div className="bg-[#1c1c1c]">
        <Navbar />
        <Home />
      </div>
      <div>
        {/* <form className="flex w-52 p-4 gap-2 flex-col" onSubmit={handleSubmit}>
          <input onChange={handleInput} type="text" placeholder="title" name="title" />
          <input onChange={handleInput} type="text" placeholder="category" name="category" />
          <input onChange={handleInput} type="text" placeholder="link" name="link" />
          <input onChange={handleInput} type="text" placeholder="order" name="order" />
          <input onChange={handleInput} type="text" placeholder="difficulty" name="difficulty" />
          <input onChange={handleInput} type="text" placeholder="id" name="id" />
          <button className="bg-white">Save</button>
        </form> */}
      </div>
    </>
  );
};

export default Page;
