import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className = "experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "2012 - 2014" 
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon = {<SchoolIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
              Al-Waleed bin Abdulmalik High school, Yanbu, Saudi Arabia
            </h3>
            <p>
              General Secondary Education Diploma Bachelor in general science
              Results: 94.44%
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "2015 - 2020" 
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon = {<SchoolIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
              SEGi University and College, Kota Damansara, Selangor
            </h3>
            <p>
              Bachelor in Information Technology, Software Engineering, Average: GPA: 2.94. 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "Jan 2016 - Dec 2016" 
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon = {<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
              SEGi University and College, Kota Damansara, Selangor, Student consular | Student helper 
            </h3>
            <p>
            	Counselling and handling of new students (Show them around university, convince them of choosing SEGi as their next educational destination)
            </p>
          </VerticalTimelineElement>

      <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "Sep 2018 - Feb 2019" 
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon = {<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
            M-Service | Russia, Dubna | Sales ??? Engineering/ Technical/IT
            </h3>
            <p>
            Cashier and one-man shop manager, Computer hardware and software consultant
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "Jun 2020 - Aug 2020" 
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon = {<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
            EVE Psychosocial Rehabilitation Centre | Internship student
            </h3>
            <p>
            Fully design a mobile application UI/UX for patients and employees, using Adobe XD
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "Mar 2021 - May 2021 " 
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon = {<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
            M-Service | Russia, Dubna | Sales ??? Engineering/ Technical/IT
            </h3>
            <p>
            Hardware aspects, repairs and diagnostics of computers and mobile phones, 
            Software aspects: A wide knowledge on software based applications that are used in computer repairs and software repairs
            </p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience