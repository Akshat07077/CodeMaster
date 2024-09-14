import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(req: Request) {
  try {
    const userCode = await req.text(); // Get the Python code from the request body

    // Execute the Python code using child_process
    const { stdout, stderr } = await execAsync(`python3 -c "${userCode.replace(/"/g, '\\"')}"`);

    // Send the output or error back
    return NextResponse.json({ output: stdout || stderr }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ output: error.message }, { status: 500 });
  }
}
