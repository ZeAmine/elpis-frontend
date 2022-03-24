import React from 'react';

const Mineur = () => {
  return (
    <div className="fiche">
      <div className="fiche__wrapper">
        <div className="fiche__header">
          <div className="fiche__header__inner">
            <div className="fiche__header__label">Aide administrative</div>
            <h1 className="fiche__header__title">
              Les mineurs non-accompagnées
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
              Un mineur non accompagné est un statuts de protection internationale, pour l’obtenir il faut avoir moins
              de 18 ans  (18ans par rapport au calendrier chrétien) et de ne pas être acccompagnées par ni leur père,
              ni leur mère, ni toutes autres personnes mandaté pour les représenter. <br/><br/>
            </p>
            <span className="fiche__content__text">Quel est la procédure de demande d'asile pour les mineurs non accompagnés ? <br/><br/></span>
            <p className="fiche__content__text">
              Comme pour les personnes majeurs, le mineur doit se présenter à la préfecture la plus proche. Si un
              mineur se présente à la préfecture sans représentant légal, alors le procureur de la république lui
              atriburat un administrateur. <br/><br/>
              Toutes les démarches de demandes d’asiles devront être réalisé par le représentant légal. Le document de
              demande d’asile doit être signée et rempli en français. Il faudrat dans un second temps l’envoyer par
              voie postal à L’ofpra <br/><br/>
            </p>
            <span className="fiche__content__text" >Ofpra, <br/> 201 rue Carnot, <br/> 94136 Fontenay-sous-Bois Cedex <br/><br/></span>
            <p className="fiche__content__text">
              Si le dossier est complet, il est alors enregistré et numérisé puis une lettre d'introduction est envoyée
              au demandeur et à son représentant légal. Le demandeur est ensuite convoqué pour un entretien à l'Ofpra.
              Il est reçu par un officier de protection qui a été formé afin d'adapter son entretien à un demandeur
              d'asile mineur. Cet entretien se déroule en présence de son représentant légal. <br/><br/>
              A l'issue de l'instruction du dossier, à partir des déclarations écrites et orales du mineur ainsi que
              des éléments qu'il a pu joindre à son dossier (documents d'état civil, certificat médical...), la réponse
              de l'Ofpra est adressée à son représentant légal et une copie est envoyée au mineur lui-même. <br/><br/>
              Si le dossier est complet, il est alors enregistré et numérisé puis une lettre d'introduction est envoyée
              au demandeur et à son représentant légal. Le demandeur est ensuite convoqué pour un entretien à l'Ofpra.
              Il est reçu par un officier de protection qui a été formé afin d'adapter son entretien à un demandeur
              d'asile mineur. Cet entretien se déroule en présence de son représentant légal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mineur;
