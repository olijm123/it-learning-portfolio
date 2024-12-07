/*misc js functions that are not relevant to the functionality of my app.js file */

//define a object that holds elements for manipulating later

const elements = {
  h1: document.querySelector("h1"),
  title: document.title, //get the current web page file
  page: window.location.href,
};

function changeH1() {
  //throw an alert if a title tag is empty innerhtml, else return the h1
  if (elements.title === "") {
    window.alert("Title has not been set!");
    document.write(
      "<h1 style='color: red'>Please set a Title Tag before continuing to modify this file.</h1>"
    );
  } else {
    return (elements.h1.innerHTML = elements.title.toUpperCase());
  }
}

//run the changeh1 function straight away

window.onload = function () {
  elements.actualH1 = elements.title;
  console.log(`Current page: ${elements.page}`);
  console.log(elements.actualH1);

  changeH1();
};
# last updated 01-11-2024
# last updated 07-12-2024
