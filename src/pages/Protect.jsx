
const Protect = () => {
  return (
    <div className="fiche">
      <div className="fiche__wrapper">
        <div className="fiche__header">
          <div className="fiche__header__inner">
            <div className="fiche__header__label">Aide administrative</div>
            <h1 className="fiche__header__title">
              Les différents types de protection <br/>
              pour les réfugiés en France
            </h1>
          </div>
        </div>
        <div className="fiche__content">
          <div className="fiche__content__lt">
            <div className="fiche__content__lt__btns">
              <button className="fiche__content__btn">
                <span>Télécharger en PDF</span>
              </button>
              <button className="fiche__content__btn">
                <span>Partager</span>
              </button>
              <button className="fiche__content__btn">
                <span>Imprimer</span>
              </button>
            </div>
          </div>
          <div className="fiche__content__rt">
            <p className="fiche__content__text">
              OFPRA qui est l’office français de protection des réfugiés et apatrides est l’organismme qui se prononce
              sur les différents types de protections que peut offrir la france. <br/><br/>
              La France propose trois types de protection : <br/><br/>
            </p>
            <span className="fiche__content__text">- Le statut de réfugié <br/><br/> - La protection subsidiaire <br/><br/> - L’ apatrie <br/><br/></span>
            <p className="fiche__content__text">
              Le statut de réfugié permet d’avoir la protection de L’OFPRA en termes juridiques et administratives et
              aussi elles ont vocation à bénéficier d’une carte de résident valable 10 ans. <br/><br/>
              Vous pouvez bénéficier de ce statut si, vous êtes persecuter dans votre pays du fait de votre religion,
              origine ou nationalité, appartenance à un groupe social ou convictions politiques.<br/><br/>
              La protection subsidaire est réservé au personne où les critères ne permettent pas d’avoir le statut de
              réfugié, mais que leur situation reste dangeurese.  <br/><br/>
              Peine de mort ou une exécution <br/><br/>
              - La torture ou des traitements inhumains ou dégradants. <br/><br/>
              - Pour des civils, une menace grave et individuelle contre sa vie ou sa personne en raison d'une violence
              aveugle résultant d'une situation de conflit armé interne ou international. <br/><br/>
              Grâce à la protection subsidaire vous êtes protégé par OFPRA en termes juridiques et administratives et
              aussi elles ont vocation à bénéficier d’une carte de résident valable 4 ans. Il lui sera délivré sous
              votre demande un titre d’identité et de voyage qui vous permettra de voyager partout sauf celui de
              votre nationalité ou de votre résidence habituelle. <br/><br/>
              L’apatrie est une protection pour les personnes dont aucun Etat ne considère comme son ressortissant par
              application de sa législation. <br/>
              Ceux-ci ont vocation à se voir délivrer une carte de séjour temporaire d'une durée de validité d'un an
              renouvelable portant la mention "vie privée et familiale". <br/> <br/>
              Lorsqu'il justifie de quatre années de résidence régulière en France, l'apatride peut solliciter la
              délivrance d'une carte de résident (valable 10 ans).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protect;
