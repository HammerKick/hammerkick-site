import { Button } from "flowbite-react";
import { useNavigate } from "react-router";

function Events() {
  let navigate = useNavigate();

  const onClickContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-3xl font-bold">
        Mes évènements
      </div>
      <div className="flex items-center justify-center mt-4">
        Depuis de nombreuses années, j'ai eu l'opportunité de me déplacer pour
        prêter ma voix et mon énergie à divers évènments, que ce soit en France
        ou à l'étranger.
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-2xl font-bold">
        Le cast français de l'Overwatch League
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8">
        <div className="flex flex-col gap-1">
          <img
            src="/assets/Overwatch_League_logo.svg.png"
            className="w-sm"
          />
          <i className="text-center">Logo de l'Overwatch League</i>
        </div>
        <div className="max-w-lg text-wrap -mt-4">
          L'Overwatch League, c'est la ligue mondiale qui voulait recopier le
          modèle des compétitions sportives américaines mais au sein de
          l'esport. Celle-ci a débuté en 2018 et s'est terminée en 2023. La
          diffusion française quant à elle a duré de 2018 à 2022. J'ai eu
          l'opportunité de rejoindre l'équipe de commentateurs français à partir
          de 2020, lors d'une saison spéciale notamment touchée par la pandémie
          de COVID-19.
          <br />
          <br />
          Très rapidement, j'ai pu me démarquer de par mon style plus orienté
          sur l'analyse poussée des situations en jeu qui a séduit le public et
          a permis de me faire un nom en tant que commentateur, mais également
          en tant que créateur de contenu, avec des formats autour de la ligue
          notamment les Hammercato.
          <br />
          <br />
          Grâce à cette opportunité, j'ai pu réellement me professionnaliser
          dans le commentaire de compétitions esport, et si dans le cadre de
          l'Overwatch League, cela n'a duré que trois saisons pour moi, les
          portes que cela m'a ouvert le sont toujours aujourd'hui.
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-2xl font-bold">
        Le Championnat de France All For One
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8">
        <div className="max-w-lg text-wrap -mt-3">
          En 2018, le Championnat de France All For One m'ouvre ses portes pour
          commenter divers matchs par le biais de mon association CastersNest
          que j'avais créée pour commenter l'Overwatch amateur à l'époque.
          <br />
          <br />
          Cela a pris de l'ampleur notamment lorsque j'ai été appelé pour
          commenter les finales en physique de certains de ces évènements. C'est
          arrivé en 2018, mais surtout en 2024 et 2025 où j'ai pu commenter des
          matchs d'Overwatch au plus haut niveau en France. En 2026, il est déjà
          prévu que l'aventure continue !
        </div>
        <div className="flex flex-col gap-1">
          <img src="/assets/afo.png" className="w-sm" />
          <i className="text-center">Logo du All For One</i>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-2xl font-bold">
        L'aventure Smash Bros
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8">
        <div className="flex flex-col gap-1">
          <img src="/assets/Ultimate_Wanted_3.png" className="w-sm" />
          <i className="text-center">Logo de l'Ultimate Wanted 3</i>
        </div>
        <div className="max-w-lg text-wrap -mt-4">
          A la base, c'est un jeu que j'adore et que je commentais pour le
          plaisir. Du moins, ça, c'était avant le COVID-19 qui a bloqué toute la
          scène. Cependant, avec le retour des évènements physiques, mon profil
          avait attiré l'attention et je me retrouve à commenter l'Ultimate
          Wanted 3, le gros major pour le retour du jeu en physique en France.
          <br />
          <br />
          Entre matchs historiques et hype à son paroxysme, j'ai prêté ma voix à
          nombreux de ces moments, et cela n'a pas laissé le public indifférent.
          C'est donc ainsi que j'ai pu démarrer un autre pan de ma carrière :
          commenter du Smash Bros.
          <br />
          <br />
          Derrière, tout s'accélère : je commente des majors, des tournois en
          ligne. Pour m'entraîner, je me propose même à des petits tournois.
          Sauf que l'un d'entre eux n'était pas qu'un simple tournoi : sans le
          vouloir, je me suis retrouvé à commenter un des sets les plus
          iconiques du Smash français : la toute première élimination de
          Glutonny face à un européen avec son Wario en tournoi.
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8">
        <div className="max-w-lg text-wrap">
          Cette soirée-là m'a ouvert d'autres portes : j'étais la voix qui,
          selon la scène, portait bonheur aux français. Pendant un tournoi à
          Lyon, Raflow re-élimine Glutonny et c'est moi qui commentait. Quelques
          semaines plus tard, en commentant chez Solary, Glutonny gagne son tout
          premier supermajor à l'étranger.
          <br />
          <br />
          La hype Smash à ce moment-là est à son sommet les tournois sont
          extrêmement nombreux. En 2022, j'ai l'occasion de commenter plus de 20
          tournois différents, avec parfois un tournoi par semaine sur deux mois
          successifs. 2023 et 2024 suivront une tendance similaire, avec
          notamment un voyage à l'étranger, en Suisse pour 2023 et en Angleterre
          pour 2024 avec un major européen, mon tout premier à l'étranger : le
          Regen.
          <br />
          <br />
          Si le jeu a perdu en vitesse en 2025 car pas de mises à jour et le
          temps qui passe, nul doute que Nintendo sortira, un jour, un nouveau
          Smash Bros qui relancera une période comme celle que l'on a pu vivre
          ces dernières années.
        </div>
        <div className="flex flex-col gap-1">
          <img src="/assets/ufa2022.jpg" className="w-sm" />
          <i className="text-center">UFA 2022</i>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-2xl font-bold">
        L'après Overwatch League : les Overwatch Champion Series
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8">
        <div className="flex flex-col gap-1">
          <img src="\assets\owcs.png" className="w-sm" />
          <i className="text-center mt-1">Logo des OWCS</i>
        </div>
        <div className="max-w-lg text-wrap -mt-3">
          Début 2024, le nouvel esport Overwatch démarre. Si le cast ne se fait
          plus forcément de manière professionnelle, cela m'ouvre une autre
          porte inattendue : celle du co-stream. C'est ni plus ni moins plus de
          200 heures de co-stream que je réalise sur ma chaîne personnelle pour
          suivre les matchs OWCS des diverses régions du monde.
          <br />
          <br />
          Mais parfois, on pouvait réellement faire du cast comme avant !
          C'était notamment le cas lorsque j'ai pu voyager directement à
          Stockholm pour proposer un cast français des finales de l'année, un
          évènement inoubliable !
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center mt-4">
        <Button
          onClick={onClickContact}
          color="blue"
          className="cursor-pointer"
        >
          Vous souhaitez m'avoir sur votre évènement ? Contactez-moi !
        </Button>
      </div>
    </>
  );
}

export default Events;
