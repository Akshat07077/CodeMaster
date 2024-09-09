'use client';
import React, { useState } from "react";
import { firestore } from "../firebase/firebase"; // Adjust the import path as needed
import { collection, addDoc } from "firebase/firestore"; 

function ProblemForm() {
  const [inputs, setInputs] = useState({
    id:'',
    title: '',
    difficulty: '',
    category: '',
    link: '',
    order: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Ensure all fields are filled
    const {id, title, difficulty, category, link, order } = inputs;
    if (!title || !id || !difficulty || !category || !link || !order) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      setLoading(true);

      const newProblem = {
        ...inputs,
        likes: 0,  // Initial default value
        dislikes: 0,  // Initial default value
        order: Number(order),  // Ensure order is a number
      };

      // Save the new problem to Firestore, automatically generating a unique ID
      await addDoc(collection(firestore, 'problems'), newProblem);

      alert("Problem successfully saved!");

      // Reset form inputs after submission
      setInputs({
        id:'',
        title: '',
        difficulty: '',
        category: '',
        link: '',
        order: '',
      });

    } catch (error) {
      console.error("Error saving problem: ", error);
      alert("Failed to save the problem. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4">
      <form className="flex flex-col gap-2 w-64" onSubmit={handleSubmit}>
      <input 
          onChange={handleInputChange}
          value={inputs.title} 
          type="text" 
          placeholder="id" 
          name="title" 
          required 
          className="border p-2"
        />
        <input 
          onChange={handleInputChange}
          value={inputs.title} 
          type="text" 
          placeholder="Title" 
          name="title" 
          required 
          className="border p-2"
        />
        <input 
          onChange={handleInputChange}
          value={inputs.category} 
          type="text" 
          placeholder="Category" 
          name="category" 
          required 
          className="border p-2"
        />
        <input 
          onChange={handleInputChange}
          value={inputs.link} 
          type="text" 
          placeholder="Link" 
          name="link" 
          required 
          className="border p-2"
        />
        <input 
          onChange={handleInputChange}
          value={inputs.order} 
          type="number" 
          placeholder="Order" 
          name="order" 
          required 
          className="border p-2"
        />
        <input 
          onChange={handleInputChange}
          value={inputs.difficulty} 
          type="text" 
          placeholder="Difficulty" 
          name="difficulty" 
          required 
          className="border p-2"
        />

        <button 
          className="bg-blue-500 text-white py-2 mt-2 rounded" 
          type="submit" 
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Problem"}
        </button>
      </form>
    </div>
  );
}

export default ProblemForm;
