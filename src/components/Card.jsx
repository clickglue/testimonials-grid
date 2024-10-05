/* eslint-disable react/prop-types */
import "../App.css";


export function Card({
  areaNumber,
  cardColor,
  cardFontColor,
  cardIllustration,
  personName,
  personAvatar,
  personStatus,
  referenceTitle,
  referenceBody,
}) 

{
  return (
    <>
      <article
        className="card"
        style={{
          backgroundColor: cardColor,
          color: cardFontColor,
          backgroundPosition: "90% 0%",
          backgroundRepeat: "no-repeat",
          gridArea: areaNumber,
          backgroundImage: cardIllustration ? `url(${import.meta.env.BASE_URL}${cardIllustration})` : "none"
        }}
      >
        <section className="person">
          <img
            className="person-avatar"
            src={personAvatar}
            alt="Image from {{personName}}"
          />
          <div>
            <h1 className="person-name">{personName}</h1>
            <h2 className="person-status">{personStatus}</h2>
          </div>
        </section>
        <section className="reference">
          <h1 className="reference-title">{referenceTitle}</h1>
          <p className="reference-body">&quot;{referenceBody}&quot;</p>
        </section>
      </article>
    </>
  );
}
