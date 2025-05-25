import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeExampleSection = () => {
  const examples = [
    {
      title: "Single-objective Optimization",
      code: `
import torch
from evox.algorithms import PSO
from evox.problems.numerical import Ackley
from evox.workflows import StdWorkflow, EvalMonitor

algorithm = PSO(pop_size=100, lb=-32 * torch.ones(10), ub=32 * torch.ones(10))
problem = Ackley()
monitor = EvalMonitor()
workflow = StdWorkflow(algorithm, problem, monitor)
workflow.init_step()
for i in range(100):
    workflow.step()

monitor.plot()
      `.trim(),
      output: "/contents/images/demo/1-single-objective-output.avif",
    },
    {
      title: "Multi-objective Optimization",
      code: `
import torch
from evox.algorithms import RVEA
from evox.metrics import igd
from evox.problems.numerical import DTLZ2
from evox.workflows import StdWorkflow, EvalMonitor

prob = DTLZ2(m=2)
pf = prob.pf()
algo = RVEA(
    pop_size=100,
    n_objs=2,
    lb=-torch.zeros(12),
    ub=torch.ones(12)
)
monitor = EvalMonitor()
workflow = StdWorkflow(algo, prob, monitor)
workflow.init_step()
for i in range(100):
    workflow.step()

monitor.plot()
      `.trim(),
      output: "/contents/images/demo/rvea_result.avif",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Code Examples</h2>
        {examples.map((example, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
            <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: "8px",
                  padding: "16px",
                  fontSize: "14px",
                }}
              >
                {example.code}
              </SyntaxHighlighter>
            </div>
            <div className="flex justify-center">
              <img
                src={example.output}
                alt={`${example.title} Output`}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodeExampleSection;
