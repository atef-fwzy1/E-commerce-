// ErrorFallback.jsx
import React from 'react';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ textAlign: 'center', color: 'red' }}>
      <p>حدث خطأ ما:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>حاول مرة أخرى</button>
    </div>
  );
}

export default ErrorFallback;
