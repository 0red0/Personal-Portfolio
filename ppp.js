const projectsHolder = document.querySelector("main section");
const mainArea = document.querySelector("main");
const pattern = document.getElementById("bg-pattern");

fetch("./projects.json")
   .then((resp) => resp.json())
   .then((data) => handler(data));

function handler(d) {
   d.forEach((project, index) => {
      const box = document.createElement("div");
      box.className = "box";
      const imgDiv = document.createElement("div");
      imgDiv.className = "image";
      const img = document.createElement("img");
      img.src = `./images/${project.imgName}`;
      img.alt = `${project.imgName}`;
      const info = document.createElement("div");
      info.className = "info";
      const title = document.createElement("div");
      title.className = "title";
      const h3 = document.createElement("h3");
      h3.innerText = `${project.title}`;
      const icons = document.createElement("div");
      icons.className = "icons";
      const codeLink = document.createElement("a");
      codeLink.href = `https://github.com/0red0/${project.gitLink}/`;
      codeLink.title = "See Code";
      codeLink.target = "_blank";
      const gitIcon = document.createElement("i");
      gitIcon.classList.add("fab", "fa-github");
      const visitLink = document.createElement("a");
      visitLink.href = `https://0red0.github.io/${project.gitLink}/`;
      visitLink.title = "Visit Page";
      visitLink.target = "_blank";
      const visitIcon = document.createElement("i");
      visitIcon.classList.add("fas", "fa-external-link-alt");
      const p = document.createElement("p");
      p.innerText = `${project.info}`;
      //Append elements from in to out
      codeLink.append(gitIcon);
      visitLink.append(visitIcon);
      icons.append(codeLink, visitLink);
      title.append(h3, icons);
      info.append(title, p);
      imgDiv.append(img);
      box.append(imgDiv, info);
      projectsHolder.append(box);
      box.onmouseover = () => {
         projectsHolder.dataset.activeIndex = index;
         if (projectsHolder.dataset.activeIndex == index) {
            pattern.style.backgroundPosition = `0% -${index * 2}%`;
         }
      };
   });
}
mainArea.addEventListener("mouseover", function () {
   pattern.classList.add("hovering");
});
mainArea.addEventListener("mouseleave", function () {
   pattern.classList.remove("hovering");
});
