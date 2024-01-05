import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoCol.js";
import MainFeature2 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

//import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading></Subheading>}
        heading="Somos apaixonados por tecnologia e inovação."
        description="Pessoas que se reunem em objetivo comum, melhoria e excelencia"
        buttonRounded={false}
     
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature2
        subheading={<Subheading>Visão</Subheading>}
        heading="Nossa motivação"
        description="Buscamos a melhoria constante da tecnologia para um mundo mais humano... Apresentamos soluções inteligentes e de alto valor para nossos clientes e sociedade."
        buttonRounded={false}
        primaryButtonText="Contato"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Valores</Subheading>}
        heading="Nosso alicerce"
        description="Somos orientados por valores sólidos de ética, integridade, colaboração, inovação e excelência. Nossa cultura promove o aperfeiçoamento contínuo, a criatividade e o compromisso com a satisfação dos nossos clientes."
        cards={[
          // {
          //   imageSrc: SupportIconImage,
          //   title: "24/7 Support",
          //   description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          // },
          {
            imageSrc: ShieldIconImage,
            title: "Time de especialistas",
            description: "Colaborativo, participativo, inovador e experiente (contabilizando nosso tempo de atuação ja passamos de 100 anos de experiencia!!)"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Focado no cliente",
            description: "Tecnologia como ferramenta! Soluções efetivas e de adoção simples."
          },
        ]}
        linkText=""
      />
      {/* <TeamCardGrid 
        subheading={<Subheading>Nosso time</Subheading>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
