import React from "react";
import Container from "../../styles/shared/Container";
import StyledSkills from "../../styles/skills/StyledSkills";
import ReactIMG from "../../public/images/skills/react_logo.svg";
import JavaScriptIMG from "../../public/images/skills/js_logo.svg";
import TypeScriptIMG from "../../public/images/skills/typescript_logo.svg";
import NextJSIMG from "../../public/images/skills/nextjs_logo.svg";
import NodejsIMG from "../../public/images/skills/node_logo.svg";
import ExpressIMG from "../../public/images/skills/express_logo.svg";
import GitIMG from "../../public/images/skills/git_logo.svg";
import BootstrapIMG from "../../public/images/skills/bootstrap_logo.svg";
import SQLiteIMG from "../../public/images/skills/sqlite_logo.svg";
import MySQLIMG from "../../public/images/skills/mysql-svgrepo-com.svg";
import HTMLIMG from "../../public/images/skills/html5_logo.svg";
import CSSIMG from "../../public/images/skills/css_logo.svg";
import SASSIMG from "../../public/images/skills/sass_logo.svg";
import CSharpIMG from "../../public/images/skills/csharp_logo.svg";
import JavaIMG from "../../public/images/skills/java_logo.svg";
import SkillItem from "./SkillItem";

const Skills: React.FC = () => {
  return (
    <StyledSkills>
      <Container>
        <h4>About</h4>
        <h2>About Me</h2>
        <h3>
          <span>Primary</span> Skills
        </h3>
        <div className="skills">
          <SkillItem title="React" img={ReactIMG} />
          <SkillItem title="JavaScript" img={JavaScriptIMG} />
          <SkillItem title="TypeScript" img={TypeScriptIMG} />
          <SkillItem title="NextJS" img={NextJSIMG} />
          <SkillItem title="Nodejs" img={NodejsIMG} />
          <SkillItem title="Express" img={ExpressIMG} />
          <SkillItem title="Git" img={GitIMG} />
          <SkillItem title="Bootstrap" img={BootstrapIMG} />
          <SkillItem title="SQLite" img={SQLiteIMG} />
          <SkillItem title="MySQL" img={MySQLIMG} />
          <SkillItem title="HTML" img={HTMLIMG} />
          <SkillItem title="CSS" img={CSSIMG} />
          <SkillItem title="SASS" img={SASSIMG} />
        </div>
        <h3>
          <span>Other</span> Skills (just basics)
        </h3>
        <div className="skills">
          <SkillItem title="CSharp" img={CSharpIMG} />
          <SkillItem title="Java" img={JavaIMG} />
        </div>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
