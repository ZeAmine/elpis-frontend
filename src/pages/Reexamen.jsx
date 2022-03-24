import React from 'react';

const Reexamen = () => {
  return (
    <div className="fiche">
      <div className="fiche__wrapper">
        <div className="fiche__header">
          <div className="fiche__header__inner">
            <div className="fiche__header__label">Aide administrative</div>
            <h1 className="fiche__header__title">
              Les réexamens des demandes <br/> d’asile ou de protection
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
              Après un refus de votre demande, il faut rentrée en contact avec une SPADA, afin de vous fixer un nouveau
              rendez-vous. Pour rentrer en contact avec une SPADA en ile de france et sur paris appeler le 01 42 500 900,
              pour obtenir une rendez-vous sinon dans les autres département rendez-vous directement dans les SPADA <br/><br/>
            </p>
            <span className="fiche__content__text">Qu’est ce que la SPADA ? <br/><br/></span>
            <p className="fiche__content__text">
              Les SPADA qui sont des structure de premier accueil des demandeurs d'asile sont des association dont la
              mission est de vous prendre un rendez-vous au guichet unique de l’OFPRA <br/><br/>
              Lors de votre rendez-vous au gichet unique, la préfecture va enregistré votre demande de réexamen et
              vous délivera une attestation de demande d’asile ainsi qu’un formulaire de réexamen. <br/><br/>
              Vous aurez alors, 8 jours pour remplir l’attestation et la fournir avec les justificatifs demander, au
              cas ou le dossier est incomplet l’Opfra vous fera bénéficié d’un délai de 4 jours suplémentaire.
            </p>
            <p className="fiche__content__text">Le dossier sera à envoyé par voie postale obligatoirement à : <br/><br/></p>
            <span className="fiche__content__text">Ofpra, <br/> 201 rue Carnot, <br/> 94136 Fontenay-sous-Bois Cedex <br/><br/></span>
            <p className="fiche__content__text">
              Pour voir les boites au lettres proches de chez vous cliquer ici  (features dans le futures sites)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reexamen;
