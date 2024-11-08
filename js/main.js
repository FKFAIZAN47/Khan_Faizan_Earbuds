(() => {

    //Create variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    function showInfo() {
        const slotId = this.getAttribute("slot");  
        let selected = document.querySelector(`[slot='${slotId}'] .HotspotAnnotation`);
        if (selected) {
          gsap.to(selected, 1, { autoAlpha: 1 });
        }
      }
  
      function hideInfo() {
        const slotId = this.getAttribute("slot");
        let selected = document.querySelector(`[slot='${slotId}'] .HotspotAnnotation`);
        if (selected) {
          gsap.to(selected, 1, { autoAlpha: 0 });
        }
      }
    
  // Add data on the hotspots
  
  const infoBoxes = [
    {
      title: "Ergonomic Design",
      text: "Designed for comfort and long-term wear.",
    },
    {
      title: "Water Resistant",
      text: "Built to withstand rain and sweat."
    },
    {
      title: "High-Fidelity Sound",
      text: "Experience superior sound quality with deep bass.",
    }
  ]
  
  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      const selected = document.querySelector(`[slot='hotspot-${index + 1}'] .HotspotAnnotation`);
      if (selected) {
        let title = document.createElement("h2");
        title.textContent = infoBox.title;
  
        let des = document.createElement("p");
        des.textContent = infoBox.text;
  
        selected.appendChild(title);
        selected.appendChild(des);
      } else {
        console.warn(`Element with slot hotspot-${index + 1} not found`);
      }
    });
  }
  
  
  // call the funcation to load data
  loadInfo();
  
  function modelLoaded() {
    console.log("Model loaded successfully");
  }

    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseenter", showInfo);
      hotspot.addEventListener("mouseleave", hideInfo);
    });
  
  })();
  
  