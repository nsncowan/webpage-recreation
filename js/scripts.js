
function removeElements() {

  const h1 = document.querySelector("h1");
  h1.remove();
}



function addElements() {
  removeElements();

  const h1New = document.createElement("h1");
  h1New.append("Webpage Recreation Practice");
  document.body.append(h1New);

  const pNew = document.createElement("p");
  pNew.append("The HTML of this webpage was created with JavaScript.");
  h1New.after(pNew);

  const imgNew = document.createElement("img");
  imgNew.setAttribute("src","https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  imgNew.setAttribute("alt","This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  imgNew.setAttribute("style", "width:50%");
  pNew.after(imgNew);
  




}
window.addEventListener("load", addElements);