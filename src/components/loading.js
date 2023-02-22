import Image from "next/image";
import spinnerIcon from "../../public/icons/spinner.svg";

export function Loading() {
  return (
    <div className="absolute inset-0 grid h-screen w-screen place-content-center bg-white/30 backdrop-blur-md">
      <div className="flex items-center gap-1">
        <Image src={spinnerIcon} alt="Spinner icon" className="h-16 w-16" />
        <p className="text-lg font-bold tracking-wide text-neutral-600">
          Loading...
        </p>
      </div>
    </div>
  );
}
