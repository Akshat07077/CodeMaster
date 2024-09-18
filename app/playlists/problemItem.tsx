type Difficulty = 'Easy' | 'Medium' | 'Hard';

type Problem = {
    title: string;
    category: string;
    difficulty: Difficulty;  // Use the new type here
    status: string;
  };
  
  export default function ProblemItem({ problem }: { problem: Problem }) {
    const difficultyColors: Record<Difficulty, string> = {
      Easy: 'text-green-500',
      Medium: 'text-yellow-500',
      Hard: 'text-red-500',
    };
  
    return (
      <li className="flex justify-between items-center bg-gray-800 p-4 rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">{problem.title}</span>
          <span className="text-sm text-gray-400">({problem.category})</span>
        </div>
        <div className="flex space-x-4">
          {/* Now TypeScript knows that problem.difficulty will always be 'Easy', 'Medium', or 'Hard' */}
          <span className={`${difficultyColors[problem.difficulty]} font-medium`}>
            {problem.difficulty}
          </span>
          <span
            className={`${
              problem.status === 'Complete' ? 'text-blue-500' : 'text-gray-400'
            }`}
          >
            {problem.status}
          </span>
        </div>
      </li>
    );
  }
  