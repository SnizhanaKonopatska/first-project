"use strict";

//	section our-services - tabs

let tabsWrap = document.querySelector(".tabs-wrapper");
function switchTabs(event) {
  let tabsTitle = document.querySelectorAll(".service-item");
  let contents = document.querySelectorAll(".explanation-service-item");
  const tab = event.target.dataset.tab;
  if (tab) {
    tabsTitle.forEach((title) => {
      title.classList.remove("active");
    });
    event.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.querySelector(
      `.explanation-service-item[data-tab="${tab}"]`
    );
    element.classList.add("active");
  }
}
tabsWrap.addEventListener("click", switchTabs);

// section our-work - filter

let filterTabWrap = document.querySelector(".works-filter");

function filter(event) {
  let filterTab = document.querySelectorAll(".work-item");
  const fil = event.target.dataset.filter;
  if (fil) {
    filterTab.forEach((title) => {
      title.classList.remove("active");
    });

    event.target.classList.add("active");
  }
  filderByData(event.target.dataset.filter);
}
filterTabWrap.addEventListener("click", filter);

function filderByData(data) {
  let galleryItems = document.querySelectorAll(".portfolio-img-list");

  const fil = data;

  if (fil === "All") {
    galleryItems.forEach((item) => {
      item.classList.remove("hide");
    });
  } else {
    galleryItems.forEach((item) => {
      item.classList.add("hide");
      if (item.dataset.filter === fil) {
        item.classList.remove("hide");
      }
    });
  }
}

// load more ...

loadMore();
function loadMore() {
  let loadAnimation = document.querySelector(".sk-three-bounce");
  let button = document.querySelector(".portfolio-button");
  let btnClickCount = 0;
  let mainBlockImg = document.querySelector(".portfolio-images-list");

  button.addEventListener("click", () => {
    button.style.display = "none";
    loadAnimation.style.display = "block";

    setTimeout(() => {
      btnClickCount++;
      if (btnClickCount === 2) {
        button.remove();
      }
      const data = document
        .querySelector(".work-item.active")
        ?.getAttribute("data-filter");
      filderByData(data);

      if (btnClickCount === 1) {
        button.style.display = "block";
        loadAnimation.style.display = "none";
        for (let key in blockImages1) {
          mainBlockImg.append(renderLi(blockImages1[key]));
          filderByData(data);
        }
      }

      if (btnClickCount === 2) {
        for (let key in blockImages2) {
          loadAnimation.style.display = "none";
          mainBlockImg.append(renderLi(blockImages2[key]));
          filderByData(data);
        }
      }
    }, 2000);

    function renderLi(object) {
      let li = document.createElement("li");
      li.classList.add("portfolio-img-list");
      li.setAttribute("data-filter", object.type);
      li.innerHTML = `<img src="${object.url}" width="282" height="211" alt="work"
		class="portfolio-img">
	<div class="hidden-block">
		<div class="hidden-block-container">
			<div class="icon-wrap">
				<a href="#">
					<svg width="43" height="42" viewBox="0 0 43 42" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect x="1" y="1" width="41" height="40" rx="20" stroke="#18CFAB" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M26.9131 16.7282L25.0948 14.8913C24.2902 14.0809 22.983 14.0759 22.1768 14.8826L20.1592 16.8926C19.3516 17.6989 19.3482 19.0103 20.1505 19.8207L21.3035 18.689C21.1868 18.3284 21.3304 17.9153 21.6159 17.6295L22.8995 16.3519C23.3061 15.9462 23.9584 15.9491 24.3595 16.3543L25.4513 17.458C25.8528 17.8628 25.8511 18.5171 25.447 18.9232L24.1634 20.2024C23.8918 20.473 23.4461 20.6217 23.1002 20.5263L21.9709 21.6589C22.7745 22.4718 24.0803 22.4747 24.8889 21.6684L26.9039 19.6592C27.7141 18.8525 27.7167 17.5398 26.9131 16.7282ZM19.5261 24.0918C19.6219 24.4441 19.4686 24.8997 19.1909 25.1777L17.9923 26.3752C17.5807 26.7845 16.916 26.7833 16.5067 26.369L15.393 25.2475C14.9847 24.8349 14.9873 24.1633 15.3982 23.7547L16.598 22.5577C16.8903 22.2661 17.3104 22.1202 17.6771 22.2438L18.8335 21.0715C18.0149 20.2462 16.6825 20.2421 15.8606 21.0632L13.9152 23.0042C13.0923 23.8266 13.0884 25.1629 13.9065 25.9886L15.7582 27.8618C16.576 28.6846 17.9072 28.6912 18.7311 27.8701L20.6765 25.9287C21.4985 25.1054 21.5024 23.7717 20.6855 22.9443L19.5261 24.0918ZM19.2579 23.5631C18.9801 23.8419 18.5343 23.8411 18.2618 23.5581C17.9879 23.2743 17.9901 22.8204 18.2661 22.5399L21.5907 19.1611C21.8668 18.8823 22.3117 18.8831 22.5851 19.164C22.8605 19.4457 22.8588 19.9009 22.5817 20.183L19.2579 23.5631Z"
							fill="#1FDAB5" />
					</svg>
				</a>
				<a href="#">
					<svg width="41" height="41" viewBox="0 0 41 41" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M20.5973 0.997925C31.8653 0.997925 40.9999 9.95225 40.9999 20.9979C40.9999 32.0432 31.8653 40.9979 20.5973 40.9979C9.32922 40.9979 0.194641 32.0432 0.194641 20.9979C0.194641 9.95225 9.32922 0.997925 20.5973 0.997925Z"
							fill="#18CFAB" />
						<rect x="14" y="16" width="12" height="11" fill="white" />
					</svg>
				</a>
			</div>
			<p class="hidden-block-title">${object.type}</p>
			<p class="hidden-block-subtitle">${object.type}</p>
		</div>
	</div>`;
      return li;
    }
  });

  let blockImages1 = {
    img1: {
      url: "./images/ourAmazingWork/landing-page1.jpg",
      type: "Landing Pages",
    },
    img2: {
      url: "./images/ourAmazingWork/graphic-design1.jpg",
      type: "Graphic Design",
    },
    img3: {
      url: "./images/ourAmazingWork/web-design2.jpg",
      type: "Web Design",
    },
    img4: {
      url: "./images/ourAmazingWork/wordpress4.jpg",
      type: "Wordpress",
    },
    img5: {
      url: "./images/ourAmazingWork/landing-page2.jpg",
      type: "Landing Pages",
    },
    img6: {
      url: "./images/ourAmazingWork/wordpress5.jpg",
      type: "Wordpress",
    },
    img7: {
      url: "./images/ourAmazingWork/web-design6.jpg",
      type: "Web Design",
    },
    img8: {
      url: "./images/ourAmazingWork/graphic-design5.jpg",
      type: "Graphic Design",
    },
    img9: {
      url: "./images/ourAmazingWork/landing-page3.jpg",
      type: "Landing Pages",
    },
    img10: {
      url: "./images/ourAmazingWork/web-design5.jpg",
      type: "Web Design",
    },
    img11: {
      url: "./images/ourAmazingWork/wordpress9.jpg",
      type: "Wordpress",
    },
    img12: {
      url: "./images/ourAmazingWork/graphic-design4.jpg",
      type: "Graphic Design",
    },
  };

  let blockImages2 = {
    img1: {
      url: "./images/ourAmazingWork/landing-page4.jpg",
      type: "Landing Pages",
    },
    img2: {
      url: "./images/ourAmazingWork/graphic-design2.jpg",
      type: "Graphic Design",
    },
    img3: {
      url: "./images/ourAmazingWork/wordpress10.jpg",
      type: "Wordpress",
    },
    img4: {
      url: "./images/ourAmazingWork/web-design1.jpg",
      type: "Web Design",
    },
    img5: {
      url: "./images/ourAmazingWork/landing-page5.jpg",
      type: "Landing Pages",
    },
    img6: {
      url: "./images/ourAmazingWork/graphic-design7.jpg",
      type: "Graphic Design",
    },
    img7: {
      url: "./images/ourAmazingWork/web-design3.jpg",
      type: "Web Design",
    },
    img8: {
      url: "./images/ourAmazingWork/graphic-design6.jpg",
      type: "Graphic Design",
    },
    img9: {
      url: "./images/ourAmazingWork/landing-page6.jpg",
      type: "Landing Pages",
    },
    img10: {
      url: "./images/ourAmazingWork/wordpress8.jpg",
      type: "Wordpress",
    },
    img11: {
      url: "./images/ourAmazingWork/web-design4.jpg",
      type: "Web Design",
    },
    img12: {
      url: "./images/ourAmazingWork/graphic-design10.jpg",
      type: "Graphic Design",
    },
  };
}
//  slider small images by img

let smallImages = document.querySelectorAll(".small-img-client");
let bigImages = document.querySelectorAll(".clientfeedback-item");

let tabs = Array.prototype.slice.apply(smallImages);
let content = Array.prototype.slice.apply(bigImages);

document
  .getElementById("clientfeedback-tabs")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("small-img-client")) {
      let tabSelect = tabs.indexOf(e.target);
      curentSlider = tabSelect;
      console.log(tabSelect);

      tabs.map((item) => item.classList.remove("active-small-client"));
      tabs[tabSelect].classList.add("active-small-client");

      content.map((content) => content.classList.remove("active-big-client"));
      content[tabSelect].classList.add("active-big-client");
    }
  });

// slider small and big images by ><
let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
let smallImagesLength = smallImages.length;
let bigImagesLength = bigImages.length;
let curentSlider = 0;

function showNextItem(event) {
  console.log(event.target.closest("button"));

  smallImages[curentSlider].classList.remove("active-small-client");
  bigImages[curentSlider].classList.remove("active-big-client");
  if (curentSlider < smallImagesLength - 1) {
    curentSlider++;
  } else {
    curentSlider = 0;
  }

  smallImages[curentSlider].classList.add("active-small-client");
  console.log(curentSlider);
  bigImages[curentSlider].classList.add("active-big-client");
  console.log(curentSlider);
}

function showPreviousItem(event) {
  console.log(event.target.closest("button"));

  smallImages[curentSlider].classList.remove("active-small-client");
  bigImages[curentSlider].classList.remove("active-big-client");

  if (curentSlider > 0) {
    curentSlider--;
  } else {
    curentSlider = bigImagesLength - 1;
  }
  smallImages[curentSlider].classList.add("active-small-client");
  console.log(curentSlider);
  bigImages[curentSlider].classList.add("active-big-client");
  console.log(curentSlider);
}

previousButton.addEventListener("click", showPreviousItem);
nextButton.addEventListener("click", showNextItem);
let grid = document.querySelector(".grid");
let msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  gutter: 20,
  percentPosition: true,
  horizontalOrder: true,
  fitWidth: true,
});
