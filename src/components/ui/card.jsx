export function Card({ children, className = "" }) {
  return (
    <div className={`border rounded-xl shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`p-4 border-t text-sm text-gray-600 ${className}`}>
      {children}
    </div>
  );
}