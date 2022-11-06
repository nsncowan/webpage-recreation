
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
  
  const h1New2 = document.createElement("h1");
  h1New2.append("Facts about the Multicolored Tanager");
  imgNew.after(h1New2);

  const ulNew = document.createElement("ul");
  li1 = document.createElement("li");
  li2 = document.createElement("li");
  li1.append("It is endemic to the mountains of Colombia.");
  li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  ulNew.append(li1, li2);
  h1New2.after(ulNew);

  const h2New = document.createElement("h2");
  h2New.append("Sources");
  ulNew.after(h2New);

  const anchorNew = document.createElement("a");
  anchorNew.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  anchorNew.append("Wikipedia");
  h2New.after(anchorNew);
}
window.addEventListener("load", addElements);