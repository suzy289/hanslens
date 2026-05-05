import Image from "next/image";
import { publicUrl } from "@/lib/media";

type Props = {
  file: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
};

export function PublicImage({
  file,
  alt,
  className,
  sizes = "(max-width: 768px) 50vw, 33vw",
  priority,
  width = 1200,
  height = 800,
  fill,
}: Props) {
  const src = publicUrl(file);

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        unoptimized
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
      unoptimized
    />
  );
}
