(() => {
// Hotspots and info boxes

  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
            const infoBoxes = [
                {
                    title: 'Noise-cancelling microphones',
                    text: 'Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises',
                    image: 'images/indicator.png',

                },
                {
                    title: '360 AUDIO',
                    text: '360 Audio places sound all around you so you can hear it from any direction.',
                    image: 'images/audio1.png',

                },
                {
                    title: 'Soft Earpiece',
                    text: 'The soft earpiece is designed to provide maximum comfort and a secure fit for all-day wear.',
                    image: 'images/earpiece.png',
                },
            ];

            // Functions

            function loadInfo() {
                infoBoxes.forEach((infoBox, index) => {
                    let selected = document.querySelector(`.Hotspot[slot="hotspot-${index +1}"]`);

                    const titleElement = document.createElement("h2");
                    titleElement.textContent = infoBox.title;

                    const textElement = document.createElement("p");
                    textElement.textContent = infoBox.text;

                    const imageElement = document.createElement("img");
                    imageElement.src = infoBox.image;
                    imageElement.alt = "Earbud feature";

                    const annotationElement = selected.querySelector(".HotspotAnnotation");
                    annotationElement.appendChild(titleElement);
                    annotationElement.appendChild(textElement);
                    annotationElement.appendChild(imageElement);
                });
            }

            loadInfo();

            function showInfo() {
                let selected = this.querySelector(".HotspotAnnotation");
                gsap.to(selected, 1, { autoAlpha: 1 });
            }

            function hideInfo() {
                let selected = this.querySelector(".HotspotAnnotation");
                gsap.to(selected, 1, { autoAlpha: 0 });
            }

            // Event listeners

            hotspots.forEach(function (hotspot) {
                hotspot.addEventListener("mouseenter", showInfo);
                hotspot.addEventListener("mouseleave", hideInfo);
            });

// Color picker
            
        const earbuds = document.querySelector("#ear-buds");
        const buttons = document.querySelectorAll("#color-con button");

        function swapColor(e) {
            // console.log(this.id);
            // console.log(e.currentTarget.id);
            const selected = e.currentTarget.id;
            earbuds.src = `images/${selected}.jpg`;
        }

        buttons.forEach(button => {
            button.addEventListener("click", swapColor);
        })

        // Xray view
        const divisor = document.querySelector("#divisor");
        const slider = document.querySelector("#slider");
      
        function moveDivisor() {
          console.log("slider.value");
          divisor.style.width = slider.value+"%";
        // divisor.style.width = `${slider.value+"%"}`;

      
        }
      
        slider.addEventListener("input", moveDivisor);

// 3D view -- frame by frame

//  gsap animation



})();

