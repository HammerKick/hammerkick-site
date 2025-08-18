import { useNavigate } from "react-router";
import { Button } from "flowbite-react";

function Home() {

    let navigate = useNavigate;

    const onClick = () => {
        window.open("https://www.youtube.com/watch?v=AE6VbAiNSFM");
    }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="max-w-lg flex flex-col justify-center">
          <div className="flex justify-center text-center mt-4 text-3xl">
            Hello tout le monde, ici HammerKick !
          </div>
          <div className="flex justify-center mt-4 text-xl">
            Commentateur, créateur de contenu et plus encore
          </div>
          <div className="flex justify-center mt-3 max-w-lg">
            <Button onClick={onClick} color="blue" className="cursor-pointer">Mon showreel</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
