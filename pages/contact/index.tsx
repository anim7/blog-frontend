import { NextPage } from "next";
import React from "react";
import { Contact as ContactComponent } from "../../components/Contact";
import { Theme } from "../../global/theme";

interface Props {
  theme: Theme;
}

const Contact: NextPage<Props> = ({ theme }) => {
  return <ContactComponent theme={theme} />;
};

export default Contact;
