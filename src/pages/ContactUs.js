import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "São Paulo",
            description: (
              <>
                <Address>
                  <AddressLine>Av. Maria Coelho Aguiar, 215</AddressLine>
                  <AddressLine>São Paulo, SP</AddressLine>
                </Address>
                <Email>contato@valor9.com.br</Email>
                <Phone>+55 (11) 99591-6988</Phone>
                
              </>
            )
          },
          // {
          //   title: "Illinois",
          //   description: (
          //     <>
          //       <Address>
          //         <AddressLine>602 Annadale Drive</AddressLine>
          //         <AddressLine>Dekalb, IL 60115</AddressLine>
          //       </Address>
          //       <Email>contact@treact.com</Email>
          //       <Phone>+1 (203) 991-6988</Phone>
          //     </>
          //   )
          // },
          // {
          //   title: "California",
          //   description: (
          //     <>
          //       <Address>
          //         <AddressLine>96 NE. Delaware Lane</AddressLine>
          //         <AddressLine>Sacramento, CA 95820</AddressLine>
          //       </Address>
          //       <Email>contact@treact.com</Email>
          //       <Phone>+1 (203) 991-6988</Phone>
          //     </>
          //   )
          // },
          // {
          //   title: "Tennessee",
          //   description: (
          //     <>
          //       <Address>
          //         <AddressLine>74 Peachtree Ave.</AddressLine>
          //         <AddressLine>Dyersburg, TN 38024</AddressLine>
          //       </Address>
          //       <Email>contact@treact.com</Email>
          //       <Phone>+1 (203) 991-6988</Phone>
          //     </>
          //   )
          // },
          // {
          //   title: "New Jersey",
          //   description: (
          //     <>
          //       <Address>
          //         <AddressLine>8355 Summer Street</AddressLine>
          //         <AddressLine>Manchester, NJ 08759</AddressLine>
          //       </Address>
          //       <Email>contact@treact.com</Email>
          //       <Phone>+1 (203) 991-6988</Phone>
          //     </>
          //   )
          // },
          // {
          //   title: "Ohio",
          //   description: (
          //     <>
          //       <Address>
          //         <AddressLine>7713 Snake Hill Ave.</AddressLine>
          //         <AddressLine>Piqua, OH 45356</AddressLine>
          //       </Address>
          //       <Email>contact@treact.com</Email>
          //       <Phone>+1 (203) 991-6988</Phone>
          //     </>
          //   )
          // }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
