import type { ArticleStep } from "@/lib/article-blocks"
import ReactMarkdown from "react-markdown"

type ArticleStepsProps = {
  steps: ArticleStep[]
}

export function ArticleSteps({ steps }: ArticleStepsProps) {
  return (
    <ol className="my-5 space-y-4">
      {steps.map((step, index) => (
        <li key={index} className="flex gap-3.5">
          <span
            className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white"
            aria-hidden
          >
            {index + 1}
          </span>
          <div className="min-w-0 pt-0.5 text-sm leading-relaxed text-foreground/80 [&_strong]:font-semibold [&_strong]:text-foreground">
            <ReactMarkdown
              components={{
                p: ({ children }) => <span>{children}</span>,
              }}
            >
              {step.text}
            </ReactMarkdown>
          </div>
        </li>
      ))}
    </ol>
  )
}
