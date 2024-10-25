import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container pt-24 pb-4 space-y-28 h-96">
        <div className="md:flex items-center justify-between ">
          <span className="text-primary font-display text-8xl sm:text-9xl font-bold">
            Koffee
          </span>
          <div className="flex flex-col md:flex-row gap-4 font-bold text-xl underline text-primary">
            <Link href="https://github.com/zaynom">Github</Link>
            <Link href="https://linkedin.com/in/omar-ouaziz">Linkedin</Link>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center  gap-4 text-gray-600">
          <p>Copyright &copy; 2024 Koffee. All rights reserved</p>
          <Link href="" className="md:ml-auto md:mr-4">
            Privacy Policy
          </Link>
          <Link href="">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
