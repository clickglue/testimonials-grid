import "./App.css";
import "./components/Card";

import cardData from "./cardData.json";
import { Card } from "./components/Card";

const assetPath=import.meta.env.BASE_URL
console.log(assetPath)

function App() {
  return (
    <>
      <main className="main">
        {cardData.map((item) => (
          <Card
            key={item.personName}
            areaNumber={item.areaNumber}
            personName={item.personName}
            personAvatar={assetPath + item.personAvatar}
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

