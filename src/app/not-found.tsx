import { Button } from "@/components/shared/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[linear-gradient(60deg,#090831,#040022)] p-4">
      <div className="max-w-2xl w-full p-8 rounded-2xl bg-[linear-gradient(60deg,#090831,#040022)] outline-1 outline-[#6971a2]/40 text-center">
        <h1 className="text-6xl font-bold text-[#4F46E5] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#e6e6e6] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#999999] mb-8">
          Oops! The page you&apos;re looking for seems to have wandered off into
          the digital void. Don&apos;t worry though, you can find your way back
          using the links below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-[linear-gradient(60deg,#090831,#040022)] hover:bg-[linear-gradient(60deg,#0B0A3D,#05002D)]">
              Report an Issue
            </Button>
          </Link>
        </div>
        <div className="mt-8 text-sm text-[#6971a2]">
          <p>
            If you believe this is a broken link, please help us improve by
            reporting it.
          </p>
          <p>Error Code: 404 - Page Not Found</p>
        </div>
      </div>
    </div>
  );
}
