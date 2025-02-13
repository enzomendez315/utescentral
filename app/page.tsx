export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
      <h1 className="text-5xl font-bold">Welcome to Utes Central</h1>
      <h2 className="text-4xl">Work in progress...</h2>
      <p className="text-lg text-gray-300 mt-4 max-w-lg">
        A platform that helps students review courses, share insights, and plan their schedules with ease.
      </p>
      <a
        href="/dashboard"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg"
      >
        Get Started
      </a>
    </div>
  );
}
