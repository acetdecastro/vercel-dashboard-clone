export default function Avatar({ size = 'md', src, alt = 'Avatar' }) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
  }[size];

  return (
    <img
      className={`${sizeClasses} rounded-full border border-gray-200 bg-contain`}
      src={src}
      alt={alt}
    />
  );
}
