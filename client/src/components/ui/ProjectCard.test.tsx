import { render } from "@testing-library/react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

test("renders recruiter-facing project case study details", () => {
  const { getByRole, getByText } = render(<ProjectCard project={projects[0]} />);

  expect(getByRole("heading", { name: /manga portfolio/i })).toBeInTheDocument();
  expect(getByText(/problem/i)).toBeInTheDocument();
  expect(getByText(/role/i)).toBeInTheDocument();
  expect(getByText(/impact/i)).toBeInTheDocument();
  expect(getByRole("link", { name: /live/i })).toHaveAttribute("href", projects[0].demoUrl);
  expect(getByRole("link", { name: /code/i })).toHaveAttribute("href", projects[0].githubUrl);
});
