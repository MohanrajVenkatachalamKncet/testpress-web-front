import React, { useEffect, useState } from "react";
import { CreateUserScore, ReadUserScore } from "../axios/axios.js";
import { Table, Typography } from "antd";
import { useSelector } from "react-redux";
import "../css/Results.css"
export default function Results() {
  const [userdata, setUserData] = useState("");
  const { username, count } = useSelector((state) => state);
  useEffect(() => {
    const ReadData = async () => {
      await CreateUserScore(username, count);
      setUserData(await ReadUserScore());
    };
    ReadData();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "1",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "2",
    },
  ];
  const data = userdata;
  return (
    <div>
      <Typography className="text">
        Overall Results
      </Typography>
      <div className="text-branch">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}
