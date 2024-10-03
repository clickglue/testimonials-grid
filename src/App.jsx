import "./App.css";
import "./components/Card";

import cardData from "./cardData.json";
import { Card } from "./components/Card";
import Test from "./components/Test";

function App() {
  return (
    <>
      <main className="main">
        {cardData.map((item) => (
          <Card
            key={item.personName}
            areaNumber={item.areaNumber}
            personName={item.personName}
            personAvatar={item.personAvatar}
            personStatus={item.personStatus}
            referenceTitle={item.referenceTitle}
            referenceBody={item.referenceBody}
            cardColor={item.cardColor}
            cardFontColor={item.cardFontColor}
            cardIllustration={item.cardIllustration}
          />
        ))}
      </main>
    </>
  );
}

export default App;
