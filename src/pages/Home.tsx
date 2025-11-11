import { useNavigate } from "react-router";
import { Button } from "flowbite-react";

function Home() {
  let navigate = useNavigate();

  const onClick = () => {
    window.open("https://www.youtube.com/watch?v=AE6VbAiNSFM");
  };

  const onClickContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <div className="max-w-lg flex flex-col justify-center">
          <div className="flex justify-center text-center mt-4 text-3xl font-bold">
            Hello tout le monde, ici HammerKick !
          </div>
          <div className="flex justify-center mt-4 text-xl">
            Commentateur, créateur de contenu et gamer
          </div>
          <div className="flex justify-center gap-4 items-center mt-4 text-xl">
            <img src="/assets/overwatch.svg" className="w-16 h-16" />
            <img src="/assets/smash.png" className="w-16 h-16" />
            & plus encore !
          </div> 
          <div className="flex justify-center mt-7 max-w-lg">
            <Button onClick={onClick} color="blue" className="cursor-pointer">
              Mon showreel
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8">
        <div className="flex flex-col gap-1">
          <img src="/assets/hammerkick.jpg" />
          <i>Soirée Peps à l'Espot - Crédit photo : Soriya</i>
        </div>
        <div className="max-w-lg text-wrap -mt-4">
          Passionné de jeux vidéo depuis mon plus jeune âge, j'ai commencé à
          m'intéresser à l'esport à partir de 2012 avec StarCraft 2 et DOTA 2.
          En 2016, Overwatch sortait et le jeu m'a tout de suite conquis de part
          la profondeur du gameplay et des stratégies.
          <br />
          <br />
          Fin 2016, je découvrais le monde du streaming et du cast et je suis
          tombé dedans rapidement. D'abord par le biais de la TV GamersOrigin,
          puis en fondant CastersNest. Je me suis rapidement mis à commenter des
          compétitions de plus en plus importantes, notamment les Overwatch
          Contenders. A partir de 2020, j'ai rejoint l'équipe du cast français
          de l'Overwatch League qui a duré jusqu'en 2022.
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8">
        <div className="max-w-lg text-wrap mr-8 -mt-4">
          Cette ascension m'a ouvert beaucoup d'opportunités : monter une chaîne
          YouTube et Twitch active autour d'Overwatch, commenter de nombreux
          évènements offline (GamersAssembly, DreamHack Stockholm), mais
          également de m'aventurer sur d'autres jeux, notamment Super Smash Bros
          Ultimate où, à la suite de l'Ultimate Wanted 3, j'ai pu y faire ma
          place et commenter de nombreux majors et de matchs de légende.
        </div>
        <div className="flex flex-col gap-1">
          <img src="/assets/hammerkick5.PNG" className="w-sm" />
          <i className="text-wrap">UFA 2024 - Crédit photo : Leny Munier</i>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-3xl font-bold">
        Ainsi, on me connaît pour :
      </div>
      <div className="flex flex-col gap-8 items-center justify-center mt-8">
        <ul className="list-disc text-lg">
          <li>
            Ma polyvalence, me permettant d'être à l'aise sur n'importe quel jeu
          </li>
          <li>
            Mon énergie et ma capacité à vivre et à faire vivre les meilleurs
            évènements
          </li>
          <li>
            Ma capacité d'analyse, permettant d'expliquer des choses complexes à
            n'importe qui
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center mt-4">
        <Button
          onClick={onClickContact}
          color="blue"
          className="cursor-pointer"
        >
          Contactez-moi !
        </Button>
      </div>
    </>
  );
}

export default Home;