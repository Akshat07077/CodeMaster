'use client'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { Problem } from "../../Problems/types/Problem";
import { TiStarOutline } from "react-icons/ti";
import { useState } from "react";
import { CheckCheckIcon, Circle, CircleCheck, CircleOff,  } from "lucide-react";

type ProblemDescriptionProps = {
  problem: Problem;
  solved: boolean;  // Add the solved prop
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem, solved }) => {
  const [viewMode, setViewMode] = useState<'description' | 'solution'>('description');

  // Toggle between description and solution
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'description' ? 'solution' : 'description'));
  };
  

  return (
    <div className="bg-[#262626]">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-hidden">
        <div
          className={`px-5 py-[10px] text-sm cursor-pointer ${
            viewMode === 'description' ? 'bg-[#262626]' : 'bg-dark-layer-1 border-l-[1px]'
          }`}
          onClick={() => setViewMode('description')}
        >
          Description
        </div>
        <div
          className={`px-5 py-[10px] text-sm cursor-pointer ${
            viewMode === 'solution' ? 'bg-[#262626]' : 'bg-dark-layer-1 border-l-[1px]'
          }`}
          onClick={() => setViewMode('solution')}
        >
          Solution
        </div>
      </div>
      {viewMode === 'description' ? (
        <div className="flex px-0 py-4 h-[calc(100vh-94px)] text-white overflow-y-auto">
          <div className="px-5">
            {/* Problem heading */}
            <div className="w-full">
              <div className="flex space-x-4">
                <div className="flex-1 mr-2 text-xl text-white font-medium">
                  {problem.title}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div
                  className={`inline-block bg-green-500 rounded-[21px] bg-opacity-[.75] px-2.5 py-1 text-xs font-medium capitalize`}
                >
                  {problem.difficulty}
                </div>
                <div
                  className={`text-olive bg-olive inline-block bg-slate-400 rounded-[21px] bg-opacity-[.65] px-2.5 py-1 text-xs font-medium capitalize`}
                >
                  Array
                </div>              
                {solved ? (
                <div>
                  <CircleCheck color="green" />
                </div>
                ) : (
                <div>
                  <p className="text-red-500"><CircleOff height={20} color="gray"/></p>
                </div>
                )}


              {/* //   <div className="rounded p-[3px] text-lg transition-colors duration-200 text-green-s text-dark-green-s">
              //     <BsCheck2Circle />
              //   </div> */}
                <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px] text-lg transition-colors duration-200 text-dark-gray-6">
                  <AiFillLike />
                  <span className="text-xs">120</span>
                </div>
                <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px] text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                  <AiFillDislike />
                  <span className="text-xs">2</span>
                </div>
                <div className="cursor-pointer hover:bg-dark-fill-3 rounded p-[3px] text-xl transition-colors duration-200 text-green-s text-dark-gray-6">
                  <TiStarOutline />
                </div>
              </div>

              {/* Problem Statement (paragraphs) */}
              <div className="text-white text-sm">
                <div dangerouslySetInnerHTML={{ __html: problem.problemStatement }} />
              </div>

              {/* Examples */}
              <div className="mt-4">
                {/* Example 1 */}
                {problem.examples.map((example, index) => (
                  <div key={example.id}>
                    <p className='font-medium text-white '>Example {index + 1}: </p>
                    {example.img && <img src={example.img} alt='' className='mt-3' />}
                    <div className='example-card'>
                      <pre>
                        <strong className='text-white'>Input: </strong> {example.inputText}
                        <br />
                        <strong>Output:</strong>
                        {example.outputText} <br />
                        {example.explanation && (
                          <>
                            <strong>Explanation:</strong> {example.explanation}
                          </>
                        )}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>

              {/* Constraints */}
              <div className="my-5">
                <div className="text-white text-sm font-medium">Constraints:</div>
                <ul className="text-white ml-5 list-disc">
                  <li className="mt-2">
                    <code>2 ≤ nums.length ≤ 10</code>
                  </li>

                  <li className="mt-2">
                    <code>-10 ≤ nums[i] ≤ 10</code>
                  </li>
                  <li className="mt-2">
                    <code>-10 ≤ target ≤ 10</code>
                  </li>
                  <li className="mt-2 text-sm">
                    <strong>Only one valid answer exists.</strong>
                  </li>
                </ul>
              </div>

              {/* Solved Status */}

            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 text-white">
          <h2 className="text-xl font-bold mb-4">Solution:</h2>
          <pre className="bg-dark-layer-1 p-4 rounded-md text-sm">
            <code>
              {problem.solution}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default ProblemDescription;
