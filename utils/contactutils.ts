export const handleClick = (subjectID: string, bodyID: string) => {
  const subject = (document.getElementById(subjectID)! as HTMLTextAreaElement)
    .value;
  const body = (document.getElementById(bodyID)! as HTMLTextAreaElement).value;
  window.open(
    `mailto:anishpandit0703@gmail.com?subject=${subject}&body=${body}`
  );
};
