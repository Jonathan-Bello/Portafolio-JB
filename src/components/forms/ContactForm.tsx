import { type ReactNode, type SyntheticEvent, useState } from "react";

type Labels = {
  name: string;
  email: string;
  message: string;
  sending: string;
  fallbackError: string;
};

type Props = {
  children?: ReactNode;
  labels: Labels;
  lang: "es" | "en";
};

export default function Form({ children, labels, lang }: Props) {
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      setResponseMessage(data.message || labels.fallbackError);
    } catch {
      setResponseMessage(labels.fallbackError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={submit} className="space-y-6">
        <input type="hidden" name="lang" value={lang} />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1"
          >
            {labels.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition duration-200 disabled:opacity-60"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1"
          >
            {labels.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition duration-200 disabled:opacity-60"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1"
          >
            {labels.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition duration-200 resize-y disabled:opacity-60"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          {isSubmitting ? (
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
              {labels.sending}
            </span>
          ) : (
            children
          )}
        </div>
      </form>

      <p className="mt-4 text-center text-sm text-neutral-700 dark:text-neutral-200">
        {responseMessage}
      </p>
    </>
  );
}
