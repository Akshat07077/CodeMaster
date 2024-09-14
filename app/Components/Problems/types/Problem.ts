export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
	target?:number
};

// local problem data
export interface Problem {
	id: string;
	title: string;
	problemStatement: string;
	examples: {
	  id: number;
	  inputText: string;
	  outputText: string;
	  explanation?: string;
	}[];
	constraints: string;
	starterCode: string;
	handlerFunction: (fn: any) => boolean;
	difficulty: string;
	order: number;
	starterFunctionName: string;
  }
  

export type DBProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
};
