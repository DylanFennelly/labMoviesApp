import React from "react";
import TVHeader from "../components/headerTV";
import SampleTV from "./sampleTVData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import TVContextProvider from "../contexts/tvContext";

export default {
  title: "TV Details Page/TVHeader",
  component: TVHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVContextProvider>{Story()}</TVContextProvider>,
  ],
};

export const Basic = () => <TVHeader tv={SampleTV} />;

Basic.storyName = "Default";
