function isBannerDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday = 1, Tuesday = 2, Wednesday = 3
  }
   
  
    // Function to create the banner
    function createBanner() {
      const banner = document.createElement('div');
      banner.id = 'banner';
      banner.innerHTML = 'Join us at the Chamber of Commerce Meet and Greet on Wednesday at 7:00 p.m.';
      banner.style.color = 'red';

      const closeButton = document.createElement('span');
      closeButton.innerHTML = '❌';

      closeButton.addEventListener('click', () => bannerDisapear());
      banner.appendChild(closeButton);

      const divBanner = document.getElementById('divBanner');
      console.log(banner.innerHTML)
      divBanner.appendChild(banner);
    }
  

    function bannerDisapear() { banner.style.display = 'none'; };
    // Check if today is a banner day 
    if (isBannerDay()) {
        //console.log("proceed to create banner")
        createBanner();
    }
