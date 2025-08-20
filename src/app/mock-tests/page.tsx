import Link from "next/link";

// Dummy list of tests
const mockTests = [
  { id: "1", title: "JavaScript Basics" },
  { id: "2", title: "React Fundamentals" },
  { id: "3", title: "Node.js Essentials" },
];

export default function MockTestsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">📝 Mock Tests</h1>
        <p className="text-lg text-gray-700 mb-6">
          Choose a test below to start practicing. Each test is timed, structured, and adaptive.
        </p>

        <ul className="flex flex-col gap-4">
          {mockTests.map((test) => (
            <li key={test.id}>
              <Link href={`/mock-tests/start/${test.id}`}>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition w-full">
                  🚀 {test.title}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
