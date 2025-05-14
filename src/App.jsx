import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import task2 from './assets/Task_2.png';
import task25 from './assets/Task_2.5.png';
import task4 from './assets/Task_4.png';
import task7 from './assets/Task_7.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>welcome to Assignment 1</p>
      </div>
      <p className="read-the-docs">

      </p>
      <div>
        <h3>Task 1: Environment Setup and App Creation (Vite)</h3>
        <h3>Task 2: Initialize Git and Basic Config</h3>
        <p>Q: What does running the first two commands do? Where are they stored?</p>
        <p>A: To set your identity (your name and e-mail), it is stored in ( ~/.gitconfig) file.</p>
        <br />
        <p>Q: Run the third command. What do you get back?</p>
        <p>A:</p>
        <img src={task2} alt="Task2 screenshot" />
        <p>Q: How can you tell if Git is already initialized?</p>
        <p>A: use "git status" returns</p>
        <img src={task25} alt="task 2.5 screenshot" />
        <h3>Task 3: Git Basics — Staging, Committing, Logging</h3>
        <p>Q: Why should commit messages be written in present tense?
          <br />
          A: Because the commit's massage describes what the commit do, not what it did.
        </p>
        <p>Q: Paste the output of git log --oneline into your app's main page as visible text</p>
        <p>A: 79d0b2b (HEAD -{">"} master) Initial commit: set up Vite react app</p>
        <h3>Task 4: Making and Tracking Changes</h3>
        <p>Q: What does git diff show? What do the + and - mean?
          <br />
          A: "git diff" shows what changed in the code, the "-" refers to what was deleted and "+" refers to what was added.
        </p>
        <img src={task4} alt="Task 4 screenshot" />
        <h3>Task 5: Undo with Confidence</h3>
        <p>
          Q: What does the above line accomplish?
          <br />
          A: "git restore" reverse any changes that has not been added, goes back to the latest commit version of the file.
        </p>
        <h3>Task 6: Connect to GitHub</h3>
        <p>
          Q: What does the -u flag do in git push? Include your GitHub repo link with your answer.
          <br />
          A: The -u flag sets up tracking so that future pushes/pulls can be done with just git push or git pull.
        </p>
        <a href="https://github.com/KSyrak/cpsc2650as1.git" target="_blank" rel="Git Hub Link">Git Hub Link</a>
        <h3>Task 7: Pull, Branch and Merge</h3>
        <img src={task7} alt="task7" />
        <h3>Task 8: Include answers to written responses in App.jsx</h3>
      </div>
    </>
  )
}

export default App
