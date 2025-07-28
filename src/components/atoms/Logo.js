import Image from "next/image";

export default function Logo() {
  return (
  <div className="flex items-center">
  <Image
    src="/founders/mvprockets-logo.svg"
    alt="MVPROCKETS"
    width={182}
    height={50}
    className="w-[140px] h-auto sm:w-[160px] md:w-[182px]"
  />
</div>
  );
}
