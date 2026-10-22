import type { FAQItem } from "@/types/content";

/**
 * The Guide Editor final copy for this project contains no FAQ page, so there is
 * no authored question/answer pair to carry over. Inventing FAQ copy here would
 * put unverified statements into FAQ structured data, so the collection stays
 * empty and every page ships `faqIds: []`. `faqSchema([])` renders nothing.
 */
export const faqItems: FAQItem[] = [];