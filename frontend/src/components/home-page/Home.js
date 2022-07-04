import React, { useState, useEffect } from "react";
import { FaWallet, FaUsers } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import "./Home.css";
import Header from "../header/Header";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

function Home() {
  const [contactCount, setContactCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  const [bundleDetails, setBundleDetails] = useState({});
  const [circularBar, setCircularBar] = useState(0);
  const [genderCount, setGenderCount] = useState({
    female_count: 0,
    male_count: 0,
  });
  const [bundleName, setBundleName] = useState(0);
  const [monthlyMessageCount, setMonthlyMessageCount] = useState({});

  useEffect(() => {
    const getContactsCount = async () => {
      try {
        const responseData = await axios.get(
          `http://localhost:5000/contacts/contact_count?user_id=2`
        );

        console.log("response contact count", responseData);
        setContactCount(responseData?.data.count);
      } catch (error) {
        console.log("error in data fetching contact", error);
      }
    };

    const getBundleDetails = async () => {
      try {
        const responseData = await axios.get(
          `http://localhost:5000/bundle/get?bundle_id=2`
        );
        console.log("bundle res check", responseData.data);

        if (responseData.data.bundle_details) {
          axios
            .get(`http://localhost:5000/message/message_count?user_id=2`)
            .then((res) => {
              console.log("msg res", res);
              const value =
                ((responseData.data?.bundle_details.No_OF_SMS -
                  res.data.count) /
                  responseData.data?.bundle_details.No_OF_SMS) *
                100;
              if (value < 0) {
                alert("Your bundle is empty");
                return (value = 0);
              }

              setCircularBar(value);
              setMessageCount(
                responseData.data?.bundle_details.No_OF_SMS - res.data.count
              );
              setBundleName(responseData.data?.bundle_details.Bundle_name);
            });
        }

        // console.log(
        //   "response bundle details",
        //   responseData.data.bundle_details.Price
        // );
        setBundleDetails(responseData.data.bundle_details);
      } catch (error) {
        console.log("error in data fetching bundle deatails", error);
      }
    };

    const getGenderCount = async () => {
      try {
        const responseData = await axios.get(
          `http://localhost:5000/contacts/gender_count?user_id=2`
        );

        console.log("response gender counts", responseData);
        setGenderCount(responseData?.data.gender_counts);
      } catch (error) {
        console.log("error in data fetching contact", error);
      }
    };

    const getMonthlyMessage = async () => {
      try {
        const responseData = await axios.get(
          `http://localhost:5000/message/monthly_message_count?user_id=2&year=2022`
        );

        console.log("response monthly message counts", responseData);
        setMonthlyMessageCount(responseData?.data.monthly_counts);
      } catch (error) {
        console.log("error in data fetching contact", error);
      }
    };

    getContactsCount();
    getBundleDetails();
    getGenderCount();
    getMonthlyMessage();
  }, []);

  //pie chart data
  const data1 = {
    labels: ["Female", "Male"],
    datasets: [
      {
        label: "# of Votes",
        data: [genderCount.female_count, genderCount.male_count],
        backgroundColor: ["rgba(255, 180, 0, 1)", "rgba(230, 93, 25, 1)"],
        borderColor: ["rgba(255, 154, 0, 1)", "rgba(230, 93, 25, 1)"],
        borderWidth: 1,
      },
    ],
  };

  //bar graph data

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data2 = {
    labels,
    datasets: [
      {
        label: "Number of SMS",
        data: [
          monthlyMessageCount.jan,
          monthlyMessageCount.feb,
          monthlyMessageCount.march,
          monthlyMessageCount.april,
          monthlyMessageCount.may,
          monthlyMessageCount.june,
          monthlyMessageCount.july,
          monthlyMessageCount.august,
          monthlyMessageCount.sep,
          monthlyMessageCount.oct,
          monthlyMessageCount.nov,
          monthlyMessageCount.dec,
        ],
        backgroundColor: "rgba(255, 180, 0, 1)",
      },
    ],
  };

  return (
    <div>
      <Header title="Home" />
      <div className="dashboard-items-container">
        <div className="dashboard-item">
          <div>
            <Badge
              pill
              bg="warning"
              text="dark"
              style={{ width: 150, height: 30 }}
            >
              <h5>{bundleName}</h5>
            </Badge>{" "}
          </div>
          <h6>Bundle</h6>
        </div>
        <div className="dashboard-item">
          <div style={{ width: 120, height: 120 }}>
            <CircularProgressbarWithChildren
              value={circularBar}
              styles={buildStyles({
                // Colors
                pathColor: "#ff7400",
                textColor: "#e5e5e5",
                trailColor: "#fede7a",
                backgroundColor: "#3e98c7",
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                <div>SMS Remaining</div>
                <div>{messageCount}</div>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="dashboard-item">
          <FaUsers size={50} color="#FFB400" />
          <h4>{contactCount}</h4>
          <h6>All Your Contacts</h6>
        </div>
        <div className="dashboard-item">
          <FaWallet size={50} color="#FFB400" />
          <h4>RS:{bundleDetails?.Price}.00</h4>
          <h6>Cost</h6>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-1">
          <div style={{ width: 700 }}>
            {/* {!loading && <BarChart chartData={ChartData} />} */}
            <div style={{ textAlign: "center" }}>
              <h5>Number of SMS</h5>
            </div>
            {/* <iframe
            className="ifr1"
            width="400"
            height="300"
            src="https://charts.mongodb.com/charts-test-ivife/embed/charts?id=62a82477-cc74-4d92-8f4c-9536176a604e&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe> */}
            <Bar data={data2} />;
          </div>
        </div>
        <div className="chart-2">
          <div className="chart-2-divid" width="400" height="300">
            <div style={{ textAlign: "center" }}>
              <h5>Contacts</h5>
            </div>
            <div>{/* <Pie data={data} /> */}</div>
            {/* <iframe
            className="ifr2"
            width="400"
            height="300"
            src="https://charts.mongodb.com/charts-test-ivife/embed/charts?id=62a8276a-36b9-4b01-8df6-6a0ef3ecd6f3&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe> */}
            <Doughnut data={data1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
