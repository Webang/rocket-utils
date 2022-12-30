export const downloadFile = (link: string, name: string) => {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  a.href = link;
  a.download = `${name}`;
  a.click();
};
