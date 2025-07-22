import DOMPurify from 'dompurify';

function ArticleContent({ html }) {
  const safeHTML = DOMPurify.sanitize(html);

  return (
    <div
      className="prose max-w-full"
      dangerouslySetInnerHTML={{ __html: safeHTML }}
    />
  );
}

export default ArticleContent