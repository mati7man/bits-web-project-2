import Logoimg from "../logo/bitslogo.png";
import academicimg from "../logo/academic.png";
import studentpromo from "../logo/student-promotion.png";
import studentgrade from "../logo/student-grades.png";
import payment from "../logo/payment info.png";
import logout from "../logo/logout.png";
import credit from "../logo/Credit-hour.png";
import course from "../logo/course.png";
import boy from "../logo/cf744f1c87a9ee2c9128ec831f75b08f.png";
import girl from "../logo/4b66c174c9fda01ecb9ebb539b2a8cff.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Form2() {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <div
        style={{
          fontWeight: "bold",
          display: "block",
          backgroundColor: "#232323",
          border: "1px solid #232323",
          height: "100vh",
          width: "15%",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottom: "2px solid white",
            borderRadius: "15px",
          }}>
          <div style={{ padding: "10px 10px 0px 10px" }}>
            <img
              src={Logoimg}
              alt=""
              style={{ borderRadius: "5px", width: "30px" }}
            />
          </div>

          <div
            style={{
              marginTop: "-10px",
              color: "white",
              padding: "5px 0px 0px 0px",
              height: "59px",
            }}>
            <h1 style={{ fontSize: "20px" }}>BITS-SIS</h1>
            <h5 style={{ fontFamily: "Helvetica", marginTop: "-20px" }}>
              @registrar
            </h5>
          </div>
        </div>
        <br />
        <div style={{ display: "block", color: "white" }}>
          <div style={{ padding: "0px 0px 10px 10px", fontSize: "14px" }}>
            <label>Calander Management</label>
          </div>
          <div
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
            style={{
              fontFamily: "Helvetica",
              cursor: "pointer",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "space-between",
              backgroundColor: "#7EC143",
            }}>
            <div style={{ paddingInline: "10px", fontSize: "12px" }}>
              <p>Academic Time Line</p>
            </div>
            <img
              src={academicimg}
              alt=""
              style={{ width: "20px", height: "20px", paddingRight: "10px" }}
            />
          </div>
          <br />
        </div>

        <div style={{ display: "block", color: "white" }}>
          <div style={{ padding: "0px 0px 10px 10px", fontSize: "14px" }}>
            <label>Student Records</label>
          </div>
          <div
            style={{
              fontFamily: "Helvetica",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "10px",
              cursor: "pointer",
            }}>
            <div
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
              style={{
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#7EC143",
              }}>
              <div style={{ paddingInline: "10px", fontSize: "12px" }}>
                <p>Student Grades</p>
              </div>
              <img
                src={studentgrade}
                alt=""
                style={{ width: "20px", height: "20px", paddingRight: "10px" }}
              />
            </div>
            <div
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
              style={{
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#7EC143",
              }}>
              <div style={{ paddingInline: "10px", fontSize: "12px" }}>
                <p>Course Eligiblity</p>
              </div>
              <img
                src={course}
                alt=""
                style={{ width: "20px", height: "20px", paddingRight: "10px" }}
              />
            </div>
            <div
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
              style={{
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#7EC143",
              }}>
              <div style={{ paddingInline: "10px", fontSize: "12px" }}>
                <p>Student Promotion</p>
              </div>
              <img
                src={studentpromo}
                alt=""
                style={{ width: "20px", height: "20px", paddingRight: "10px" }}
              />
            </div>
          </div>
        </div>
        <br />

        <div style={{ display: "block", color: "white" }}>
          <div style={{ padding: "0px 0px 10px 10px", fontSize: "14px" }}>
            <label>Student Financial Records</label>
          </div>
          <div
            style={{
              fontFamily: "Helvetica",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "10px",
            }}>
            <div
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
              style={{
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#7EC143",
              }}>
              <div style={{ paddingInline: "10px", fontSize: "12px" }}>
                <p>Credit Hour Rate</p>
              </div>
              <img
                src={credit}
                alt=""
                style={{ width: "20px", height: "20px", paddingRight: "10px" }}
              />
            </div>
            <div
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
              style={{
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#7EC143",
              }}>
              <div style={{ paddingInline: "10px", fontSize: "12px" }}>
                <p>Payment Information</p>
              </div>
              <img
                src={payment}
                alt=""
                style={{ width: "20px", height: "20px", paddingRight: "10px" }}
              />
            </div>
          </div>
        </div>
        <div
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
          style={{
            cursor: "pointer",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#C85A4B",
            marginTop: "125px",
            color: "white",
          }}>
          <div
            style={{
              fontFamily: "Helvetica",
              paddingInline: "10px",
              fontSize: "12px",
            }}>
            <p>Logout</p>
          </div>
          <img
            src={logout}
            alt=""
            style={{ width: "20px", height: "20px", paddingRight: "10px" }}
          />
        </div>
      </div>

      <div
        className="content-section"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "85%",
          paddingInline: "10px",
          height: "100vh",
        }}>
        <div
          className="header"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingInline: "2em",
            paddingBlock: ".5em",
            justifyContent: "space-between",
            borderBottom: "2px solid black",
          }}>
          <h2 style={{ fontWeight: "lighter" }}>Registar Dashboard</h2>
          <div
            className="user"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1em",
              alignItems: "center",
            }}>
            <div
              className="circle"
              style={{
                backgroundColor: "#FF9800",
                borderRadius: "50%",
                padding: "1rem",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
              }}>
              <strong>N</strong>
            </div>
            <div className="name">
              <p>
                <strong>Nigus Solomon</strong>
              </p>
              <p>Register Office</p>
            </div>
          </div>
        </div>
        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            height: "100%",
            padding: "1em 2em",
            justifyContent: "space-around",
          }}>
          <div
            className="boxes"
            style={{
              height: "40%",
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}>
            <p
              style={{
                fontSize: "1em",
              }}>
              Financial Report for 2023
            </p>
            <div
              className="card1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8em",
                border: "1px solid black",
                padding: ".5em 1em",
                borderBottom: "4px solid black",
              }}>
              <div className="card">
                <p style={{ paddingBottom: "15px" }}>Active Users</p>
                <div
                  className="div"
                  style={{
                    display: "inline-flex",
                    gap: ".5em",
                    alignItems: "center",
                  }}>
                  <p style={{ fontSize: "xx-large", fontWeight: "bold" }}>
                    205
                  </p>
                  <p style={{ fontSize: "small", fontWeight: "light" }}>
                    Total Users
                  </p>
                </div>
              </div>
              <div className="card">
                <p style={{ paddingBottom: "15px" }}>Undergraduate</p>
                <div
                  className="div"
                  style={{
                    display: "inline-flex",
                    gap: ".5em",
                    alignItems: "center",
                  }}>
                  <p style={{ fontSize: "xx-large", fontWeight: "bold" }}>
                    205
                  </p>
                  <p style={{ fontSize: "small", fontWeight: "light" }}>
                    Total Users
                  </p>
                </div>
              </div>
              <div className="card">
                <p style={{ paddingBottom: "15px" }}>Post Graduate</p>
                <div
                  className="div"
                  style={{
                    display: "inline-flex",
                    gap: ".5em",
                    alignItems: "center",
                  }}>
                  <p style={{ fontSize: "xx-large", fontWeight: "bold" }}>
                    205
                  </p>
                  <p style={{ fontSize: "small", fontWeight: "light" }}>
                    Total Users
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card2"
              style={{ display: "inline-flex", gap: "6em" }}>
              <div className="card">
                <p style={{ paddingBottom: "15px" }}>Undergraduate</p>
                <div
                  className="div"
                  style={{
                    display: "inline-flex",
                    gap: ".5em",
                    alignItems: "center",
                  }}>
                  <p style={{ fontSize: "xx-large", fontWeight: "bold" }}>
                    205
                  </p>
                  <p style={{ fontSize: "small", fontWeight: "light" }}>
                    Total Users
                  </p>
                </div>
              </div>
              <div className="card">
                <p style={{ paddingBottom: "15px" }}>Undergraduate</p>
                <div
                  className="div"
                  style={{
                    display: "inline-flex",
                    gap: ".5em",
                    alignItems: "center",
                  }}>
                  <p style={{ fontSize: "xx-large", fontWeight: "bold" }}>
                    205
                  </p>
                  <p style={{ fontSize: "small", fontWeight: "light" }}>
                    Total Users
                  </p>
                </div>
              </div>
              <div className="card">
                <p style={{ paddingBottom: "15px" }}>Undergraduate</p>
                <div
                  className="div"
                  style={{
                    display: "inline-flex",
                    gap: ".5em",
                    alignItems: "center",
                  }}>
                  <p style={{ fontSize: "xx-large", fontWeight: "bold" }}>
                    205
                  </p>
                  <p style={{ fontSize: "small", fontWeight: "light" }}>
                    Total Users
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="actions">
            <h3>Recent Actions</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Uploaded student grades for 2023 semester 1</p>
                  <p id="dates">Thu, 28, 2023</p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Uploaded student grades for 2023 semester 1</p>
                  <p id="dates">Thu, 28, 2023</p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Uploaded student grades for 2023 semester 1</p>
                  <p id="dates">Thu, 28, 2023</p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Uploaded student grades for 2023 semester 1</p>
                  <p id="dates">Thu, 28, 2023</p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Uploaded student grades for 2023 semester 1</p>
                  <p id="dates">Thu, 28, 2023</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form2;
