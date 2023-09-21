import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const App = () => {

  return <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
    Welcome
  </main>;
};

export default App;
