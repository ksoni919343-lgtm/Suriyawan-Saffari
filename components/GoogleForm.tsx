export default function GoogleForm({ formId }) {
  return <iframe src={`https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true`} />;
}
