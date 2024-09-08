'use client';
import React, { useState } from "react";
import { firestore } from "../firebase/firebase"; // Adjust the import path as needed
import { doc, setDoc } from "firebase/firestore"; 

function ProblemForm() {
  const [inputs, setInputs] = useState({
    id: '',
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
    if (!inputs.id || !inputs.title || !inputs.category || !inputs.link || !inputs.order || !inputs.difficulty) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      setLoading(true);

      const newProblem = {
        ...inputs,
        likes: 0,  // Initial default value
        dislikes: 0,  // Initial default value
        order: Number(inputs.order),  // Convert order to number
      };

      // Save the new problem to Firestore
      await setDoc(doc(firestore, 'problems', inputs.id), newProblem);

      alert("Problem successfully saved!");

      // Reset form inputs after submission
      setInputs({
        id: '',
        title: '',
        difficulty: '',
        category: '',
        link: '',
        order: '',
      });

    } catch (error) {
      console.error("Error saving problem: ", error);
      alert("Failed to save the problem.");
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
          placeholder="Title" 
          name="title" 
          required 
        />
        <input 
          onChange={handleInputChange}
          value={inputs.category} 
          type="text" 
          placeholder="Category" 
          name="category" 
          required 
        />
        <input 
          onChange={handleInputChange}
          value={inputs.link} 
          type="text" 
          placeholder="Link" 
          name="link" 
          required 
        />
        <input 
          onChange={handleInputChange}
          value={inputs.order} 
          type="number" 
          placeholder="Order" 
          name="order" 
          required 
        />
        <input 
          onChange={handleInputChange}
          value={inputs.difficulty} 
          type="text" 
          placeholder="Difficulty" 
          name="difficulty" 
          required 
        />
        <input 
          onChange={handleInputChange}
          value={inputs.id} 
          type="text" 
          placeholder="ID" 
          name="id" 
          required 
        />

        <button 
          className="bg-white py-2" 
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
