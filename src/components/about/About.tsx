import { PawHubContainer } from "components/layout/Grid/PetCardFlex";

import Dog from "./dog-cat.jpg";

export default function About() {
  return (
    <PawHubContainer>
      <div className="about__container content-center">
        <section className="paragraph--section">
          <img
            className=" mx-auto mb-3 rounded-2xl w-1/2   "
            src={Dog}
            alt="doggo"
          />
          <h1 className="font-amatic text-5xl font-bold ">
            About This Project
          </h1>
          <p className="my-4">
            It is forked from{" "}
            <a
              href="https://github.com/redxzeta/Awesome-Adoption?tab=readme-ov-file"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://github.com/redxzeta/Awesome-Adoption?tab=readme-ov-file
            </a>{" "}
            an open-source project has done a great job in pet adoption.
          </p>
        </section>
      </div>
    </PawHubContainer>
  );
}
