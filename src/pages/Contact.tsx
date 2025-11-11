import {
  Button,
  Radio,
  Label,
  TextInput,
  Textarea,
  Card,
} from "flowbite-react";
import { useState } from "react";
import { FaPerson } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

function Contact() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    raison: "proposition-event",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est obligatoire";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est obligatoire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await fetch("https://formspree.io/f/mzzybarv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nom: formData.nom,
            email: formData.email,
            raison: formData.raison,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setHasSubmitted(true);
          // Réinitialiser le formulaire
          setFormData({
            nom: "",
            email: "",
            raison: "proposition-event",
            message: "",
          });
        }
      } catch (error) {
        console.error("Erreur:", error);
      }
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Effacer l'erreur pour ce champ quand l'utilisateur commence à taper
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  return (
    <>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-3xl font-bold">
        Me contacter
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mt-8 text-lg">
        Vous pouvez directement m'envoyer un mail à bournierantoine@gmail.com ou
        alors utiliser le formulaire ci-dessous.
      </div>
      {hasSubmitted && (
        <div className="flex flex-row gap-8 items-center justify-center mt-8 text-lg rounded-lg bg-green-400 text-black max-w-4xl p-2 mx-auto">
          Votre message a bien été envoyé ! Je vous répondrai au plus vite.
          Merci de votre visite !
        </div>
      )}
      <Card className="mt-8 max-w-4xl mx-auto">
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full">
            <Label htmlFor="nom" className="font-bold mb-2 block">
              Nom et/ou pseudonyme *
            </Label>
            <TextInput
              id="nom"
              icon={FaPerson}
              type="text"
              required
              className="w-full"
              value={formData.nom}
              onChange={(e) => handleInputChange("nom", e.target.value)}
              placeholder="Votre nom et/ou pseudonyme"
            />
            {errors.nom && (
              <p className="mt-1 text-sm text-red-600">{errors.nom}</p>
            )}
          </div>

          <div className="w-full">
            <Label htmlFor="email" className="font-bold mb-2 block">
              Email (pour vous recontacter) *
            </Label>
            <TextInput
              id="email"
              icon={HiMail}
              type="email"
              required
              className="w-full"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="nom@gmail.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="w-full">
            <Label htmlFor="radios" className="font-bold mb-2 block">
              Raison de la demande :
            </Label>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Radio
                  id="proposition-event"
                  name="raison"
                  value="proposition-event"
                  checked={formData.raison === "proposition-event"}
                  onChange={(e) => handleInputChange("raison", e.target.value)}
                />
                <Label htmlFor="proposition-event">
                  Proposition d'évènement
                </Label>
              </div>
              <div className="flex gap-2 items-center">
                <Radio
                  id="proposition-sponso"
                  name="raison"
                  value="proposition-sponso"
                  checked={formData.raison === "proposition-sponso"}
                  onChange={(e) => handleInputChange("raison", e.target.value)}
                />
                <Label htmlFor="proposition-sponso">
                  Proposition de partenariat
                </Label>
              </div>
              <div className="flex gap-2 items-center">
                <Radio
                  id="proposition-autre"
                  name="raison"
                  value="proposition-autre"
                  checked={formData.raison === "proposition-autre"}
                  onChange={(e) => handleInputChange("raison", e.target.value)}
                />
                <Label htmlFor="proposition-autre">Autre</Label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Label htmlFor="message" className="font-bold mb-2 block">
              Votre message *
            </Label>
            <Textarea
              id="message"
              placeholder="Que souhaitez-vous ?"
              required
              rows={8}
              className="min-h-48 w-full"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <div className="w-full flex">
            <Button
              onClick={onSubmit}
              color="green"
              className="w-24 cursor-pointer"
            >
              Envoyer
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Contact;
