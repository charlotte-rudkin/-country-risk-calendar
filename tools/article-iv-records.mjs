// Keep consultation details attached to their source, across routine feed refreshes.
export function mergeArticleIVRecord(previous, item) {
  if (!previous) return { ...item };
  if (Date.parse(item.publishedAt) < Date.parse(previous.publishedAt)) return previous;
  const sameSource = previous.url && previous.url === item.url;
  if (sameSource) return { ...previous, ...Object.fromEntries(Object.entries(item).filter(([, value]) => value !== undefined)) };
  const completed = record => record && (record.status === 'completed' || /(?:concludes?|concluded|completes?|completed).*article iv|article iv.*(?:concluded|completed)/i.test(record.title || '')) && !/mission|staff.concluding/i.test(record.title || '');
  const lastCompletedReview = completed(previous) ? previous : previous.lastCompletedReview;
  // Never transfer another release's key points or review date to a new headline.
  return { ...item, ...(lastCompletedReview ? { lastCompletedReview: { ...lastCompletedReview, lastCompletedReview: undefined } } : {}) };
}
