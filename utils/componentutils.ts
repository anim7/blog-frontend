import { Theme } from "../global/theme";

export const updateTheme = (theme: Theme, container: HTMLElement) => {
  container.setAttribute("data-theme", theme);
};
