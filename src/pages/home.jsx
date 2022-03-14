import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Loading } from "../components";

const Home = () => {
  const { isLoading } = useQuery(["users"], () =>
    axios.get("https://reqres.in/api/users")
  );
  return (
    <>
      <div className="p-4 flex flex-col items-start gap-4">
        <h1 className="font-bold text-4xl">خانه</h1>
        <Link to="/login">لینک ورود</Link>
        <Link to="/components">کامپوننت ها</Link>
        <Link to="/apis">seperate api files</Link>
      </div>
      <Loading show={isLoading} />
    </>
  );
};

export default Home;
