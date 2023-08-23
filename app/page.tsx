/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="flex container min-h-screen flex-col items-center justify-between p-24 border border-red-500 border-dashed">
      <span className="w-1/3 text-center text-xl text-semibold">
        Just enter your <span className="text-green-500">username</span> to get
        started! If you're joining a room, make sure to ask your host for the
        room ID.
      </span>
    </main>
  );
}
