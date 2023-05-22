import { useRouter } from "next/router";
import Resume from "../src/components/units/resume";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/resume");
  });

  return <div>여긴 뭘로 꾸미나~!</div>;
};

export default Home;
