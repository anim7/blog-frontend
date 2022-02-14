export const handleLinkClick = (
  linkID: string,
  linkClass: string,
  activeClass: string,
  remove: boolean
) => {
  const links = document.getElementsByClassName(linkClass);
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove(activeClass);
  }
  if (!remove) {
    const link = document.getElementById(linkID)!;
    link.classList.add(activeClass);
  }
};

export const handleClick = (
  container: string,
  activeContainer: string,
  links: string,
  active: string,
  authBtnsClass: string
) => {
  document
    .getElementsByClassName(container)[0]
    .classList.toggle(activeContainer);
  if (document.getElementsByClassName(links)[0].classList.contains(active)) {
    document.getElementsByClassName(links)[0].classList.toggle(active);
    const authBtns = document.getElementsByClassName(authBtnsClass);
    for (let i = 0; i < authBtns.length; i++) {
      authBtns[i].classList.toggle(active);
    }
  } else {
    setTimeout(() => {
      document.getElementsByClassName(links)[0].classList.toggle(active);
      const authBtns = document.getElementsByClassName(authBtnsClass);
      for (let i = 0; i < authBtns.length; i++) {
        authBtns[i].classList.toggle(active);
      }
    }, 700);
  }
};
