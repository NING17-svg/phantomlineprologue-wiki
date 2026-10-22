import { RichText } from "@/components/content/RichText";
import type { ComparisonModule } from "@/types/modules";

export function ComparisonBlock({ guideModule }: { guideModule: ComparisonModule }) {
  return (
    <section id={guideModule.id} className="content-module">
      <h2>{guideModule.heading}</h2>
      {guideModule.intro ? <RichText text={guideModule.intro} /> : null}
      <div className="comparison-grid">
        {guideModule.options.map((option, index) => (
          <article key={`${option.name}-${index}`} className="comparison-card">
            {option.badge ? <span className="module-badge">{option.badge}</span> : null}
            <h3>{option.name}</h3>
            <p>{option.summary}</p>
            {option.bestFor ? (
              <p className="module-note">
                <strong>Best for:</strong> {option.bestFor}
              </p>
            ) : null}
          </article>
        ))}
      </div>
      {guideModule.outro ? <RichText text={guideModule.outro} /> : null}
    </section>
  );
}
