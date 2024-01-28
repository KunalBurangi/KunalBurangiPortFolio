import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import kubernateImg from '../../assets/images/kubernetes.svg'

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.fontAwesomeClassname ?
                  <><i className={skills.fontAwesomeClassname}></i><p>{skills.skillName}</p></>
                  :
                  <><img src={kubernateImg} className="kubernates" alt="kubernates" fill="black" />
                    <p>{skills.skillName}</p>
                  </>
                }
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
