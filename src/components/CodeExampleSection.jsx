import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeExampleSection = () => {
  const codeSnippet = `
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
  `.trim();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Code Example</h2>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <SyntaxHighlighter
            language="python"
            style={vscDarkPlus}
            customStyle={{
              borderRadius: "8px",
              padding: "16px",
              fontSize: "14px",
            }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
};

export default CodeExampleSection;
