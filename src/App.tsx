import "./App.css";
import Programmers from "./component/Programmers";
import Company from "./component/Company";
import Services from "./component/Services";
import Card from "./component/Card";

function App() {
  return (
    <div>
      <Programmers
        name="Rayan"
        programing_lang={"1.Python 2.Javascript 3.Java"}
        experince={6}
        company={"STC"}
      />

      <Company companyName={"STC"} employees={1020} foundingDay={1995} />
      <Services service="Fiber" price={200} />
      <Programmers
        name="Fahad"
        programing_lang={"1.Python 2.C# 3.Java"}
        experince={2}
        company={"minstry of health"}
      />
      <Company companyName={"Mobile"} employees={11245} foundingDay={1990} />
      <Services service="Internet Package" price={400} />

      <Programmers
        name="Abdullah"
        programing_lang={"1.HTML 2.CSS 3.Javascript"}
        experince={1}
        company={"KAFD"}
      />
      <Company companyName={"java time"} employees={650} foundingDay={1999} />
      <Services service="Black Coffee" price={11} />
    </div>
  );
}

export default App;
