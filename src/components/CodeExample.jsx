import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight, solarizeddark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState } from "react";

const CodeExample = () => {
  const [darkMode, setDarkMode] = useState(false);

  const exampleCode = `import torch
from evox.algorithms import PSO
from evox.problems.numerical import Ackley
from evox.workflows import StdWorkflow, EvalMonitor

# torch.set_default_device("cuda") # Uncomment this line if you want to use GPU by default

algorithm = PSO(pop_size=100, lb=-32 * torch.ones(10), ub=32 * torch.ones(10))
problem = Ackley()
monitor = EvalMonitor()
workflow = StdWorkflow(algorithm, problem, monitor)
workflow.init_step()
for i in 100:
    workflow.step()

monitor.plot() # or monitor.plot().show() if you are using headless mode`;

  const exampleOutput = `Output:
Iteration 1: Fitness = 0.23
Iteration 2: Fitness = 0.19
...
Iteration 100: Fitness = 0.01`;

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
          Code Example
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          See how simple it is to use EvoX for optimization tasks.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-1/2 bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
            <SyntaxHighlighter
              language="python"
              style={darkMode ? solarizeddark : solarizedlight}
            >
              {exampleCode}
            </SyntaxHighlighter>
          </div>
          <div className="w-full md:w-1/2 bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
            <SyntaxHighlighter
              language="plaintext"
              style={darkMode ? solarizeddark : solarizedlight}
            >
              {exampleOutput}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              darkMode ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"
            }`}
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
