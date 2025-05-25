import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeExample = () => {
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
for i in range(100):
    workflow.step()

monitor.plot() # or monitor.plot().show() if you are using headless mode`;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Code Example</h2>
        <p className="text-center text-gray-600 mb-8">
          See how simple it is to use EvoX for optimization tasks.
        </p>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <SyntaxHighlighter language="python" style={solarizedlight}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
