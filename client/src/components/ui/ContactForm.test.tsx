import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "../../i18n";
import ContactForm from "./ContactForm";

test("submits contact form and shows success feedback", async () => {
  const fetchMock = jest.fn().mockResolvedValue({ ok: true });
  global.fetch = fetchMock;
  const user = userEvent.setup();

  const { findByRole, getByLabelText, getByRole } = render(<ContactForm />);

  await user.type(getByLabelText(/name/i), "Recruiter");
  await user.type(getByLabelText(/email/i), "recruiter@example.com");
  await user.type(getByLabelText(/subject/i), "Interview");
  await user.type(getByLabelText(/message/i), "Let us talk about a role.");
  await user.click(getByRole("button", { name: /send message/i }));

  expect(await findByRole("status")).toHaveTextContent(/message sent successfully/i);
  expect(fetchMock).toHaveBeenCalledTimes(1);
});
