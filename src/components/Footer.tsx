export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="text-sm w-full text-center">
        Made with Next.js, TailwindCSS and ❤️ by Samantha Whelpley. &copy;{" "}
        {currentYear}
      </p>
      <p className="text-xs w-full text-center text-white">
        Inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className="font-medium"
        >
          Brittany Chiang&apos;s portfolio.
        </a>
      </p>
    </footer>
  );
}
