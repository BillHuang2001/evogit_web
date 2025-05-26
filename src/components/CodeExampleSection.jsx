import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ExampleOutput from "./ExampleOutput";

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
    {
      title: "Neuroevolution",
      code: `
import torch
import torch.nn as nn
from evox.algorithms import PSO
from evox.problems.neuroevolution.brax import BraxProblem
from evox.utils import ParamsAndVector
from evox.workflows import EvalMonitor, StdWorkflow

class SimpleMLP(nn.Module):
    def __init__(self):
        super().__init__()
        self.features = nn.Sequential(nn.Linear(17, 8), nn.Tanh(), nn.Linear(8, 6))

    def forward(self, x):
        return torch.tanh(self.features(x))

model = SimpleMLP()
adapter = ParamsAndVector(dummy_model=model)
POP_SIZE = 1024
pop_center = adapter.to_vector(dict(model.named_parameters()))
lb = torch.full_like(pop_center, -5)
ub = torch.full_like(pop_center, 5)
algorithm = PSO(pop_size=POP_SIZE, lb=lb, ub=ub)
problem = BraxProblem(
    policy=model,
    env_name="halfcheetah",
    max_episode_length=1000,
    num_episodes=3,
    pop_size=POP_SIZE,
)
monitor = EvalMonitor(topk=3)
workflow = StdWorkflow(
    algorithm=algorithm,
    problem=problem,
    monitor=monitor,
    opt_direction="max",
    solution_transform=adapter,
)
workflow.init_step()
for i in range(50):
    workflow.step()

monitor.plot()
      `.trim(),
      output: "/contents/images/demo/halfcheetah_200.avif",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
          Code Examples
        </h2>
        {examples.map((example, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {example.title}
            </h3>
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 mb-4">
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
            <ExampleOutput src={example.output} alt={`${example.title} Output`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodeExampleSection;
