import { Button } from "flowbite-react";
import { useNavigate } from "react-router";

function Projects() {
  let navigate = useNavigate();

  const onClickContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-3xl font-bold">
        Mes projets
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-2xl font-bold">
        Team Peps - Social Lead
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8">
        <div className="flex flex-col gap-1">
          <img
            src="src\assets\Team_Peps_July_2022_allmode.png"
            className="w-sm"
          />
          <i className="text-center">Logo de la Team Peps</i>
        </div>
        <div className="max-w-lg text-wrap -mt-4">
          Depuis fin 2023, je suis le Social Lead de la Team Peps. Fondée par
          Féfé, ancien coach sportif & en Overwatch League, elle a pour but de
          faire rayonner la scène Overwatch en France et participe aux plus
          grandes compétitions européennes et mondiales.
          <br />
          <br />
          Dans le cadre de sa participation au Championnat de France, aux
          Overwatch Champion Series et à la FACEIT League, mais également dans
          le cadre de d'autres jeux comme Pokémon VGC, je m'occupe d'animer les
          réseaux sociaux, notamment le compte Twitter, et de produire des
          articles pour le site web de la Team Peps.
          <br />
          <br />
          Aujourd'hui, le compte Twitter ramène des dizaines de millers
          d'impression par semaine et grâce au travail de toute l'équipe autour
          de moi, la Team Peps s'est démarquée comme une référence européenne
          sur Overwatch, en plus d'avoir la meilleure fanbase !
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-2xl font-bold">
        Star Bits - Mon équipe Overwatch
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8">
        <div className="max-w-lg text-wrap -mt-4">
          En juillet 2025, je souhaitais passer une étape en tant que créateur
          de contenus : avoir ma propre équipe Overwatch. Le nom Star Bits et la
          direction artistique autour de mon jeu préféré de tous les temps,
          Super Mario Galaxy, m'est venue immédiatemment.
          <br />
          <br />
          Il me fallait donc des joueurs. Et une équipe avait attirée mon
          attention : l'équipe 0907, possédant à sa base le français
          TurboSmooth, l'espagnol Conde et l'allemand Dockiy. Les trois étaient
          imédiattement enthousiastes vis à vis du projet et ainsi, après avoir
          ajouté d'autres joueurs, notamment le français Majin et l'espagnol
          Mighty, Star Bits était né.
          <br />
          <br />
          Le projet et l'équipe sont annoncés début août 2025 dans l'optique de
          participer à la saison 6 de la FACEIT League Master. Star Bits termine
          5e en saison régulière et 5e en playoffs, une bonne performance mais
          pas suffisante vis à vis des ambitions de l'équipe.
          <br />
          <br />
          Aujourd'hui, l'équipe se prépare à participer à la septième saison de
          la FACEIT League Master qui, cette fois-ci, aura encore plus d'enjeux
          et avec un potentiel encore plus grand. Je commente les matchs de mon
          équipe et gère la communication de celle-ci sur les réseaux seul avec
          l'aide bien sûr de talentueux artistes créant des visuels magnifiques
          autour de cette direction artistique très "spatiale".
        </div>
        <div className="flex flex-col gap-1">
          <img src="src\assets\star bits logo.png" className="w-sm" />
          <i className="text-center">Logo de Star Bits</i>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-2xl font-bold">
        Hammerclash - Tournois sur Overwatch et Smash Bros
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8">
        <div className="flex flex-col gap-1">
          <img src="src\assets\hammerclash  logo.png" className="w-sm" />
          <i className="text-center">Logo du Hammerclash</i>
        </div>
        <div className="max-w-lg text-wrap -mt-4">
          Mes principales expériences dans l'évènementiel viennent des
          Hammerclash, des tournois que j'ai organisé depuis déjà plusieurs
          années sur deux jeux différents : Overwatch et Super Smash Bros
          Ultimate.
          <br />
          <br />
          Tous online, ils réunissaient à chaque fois entre 10 et 16 équipes de
          cinq joueurs sur Overwatch et autour d'une cinquantaine de joueurs sur
          Smash Bros, avec des récompenses monétaires pouvant aller jusqu'à
          400€.
          <br />
          <br />
          En 2026, le Hammerclash passe à l'étape supérieure avec un évènement physique les 17 et 18 janvier à Courbevoie pour la scène Overwatch (suite à un donation goal ZEvent atteint)
        </div>
      </div>
    </>
  );
}

export default Projects;
