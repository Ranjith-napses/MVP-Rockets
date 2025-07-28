
export default function BrandLogo({ src, alt }) {
  return (
    <div className="flex items-center justify-center w-32 h-20 md:w-48 md:h-24">
      <img
        src={src}
        alt={alt}
        className="object-contain w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
