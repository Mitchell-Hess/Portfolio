export default function ThemeDebug() {
  return (
    <section className="py-12 bg-white text-black dark:bg-red-600 dark:text-white transition-colors duration-300">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <div className="text-xl font-bold">
          Theme Debug Block
        </div>
        <div>
          <code className="bg-gray-200 dark:bg-black dark:text-green-400 px-2 py-1 rounded">
            body.dark → should turn this entire block red
          </code>
        </div>
      </div>
    </section>
  );
}
