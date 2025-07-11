export function themeChange(){
    const themeOption = document.getElementById('theme-opt');
    const nav = document.querySelector(".nav-wrapper");
    const themeWrap = document.querySelector(".theme-btn-wrap");
    
    themeOption.classList.toggle('active');
    nav.classList.toggle('theme-nav');
    themeWrap.classList.toggle('active');
}

export function skillShow(event) {
  const skillBtns = document.querySelectorAll('.skill-category');

  skillBtns.forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const frontEndBtn = document.querySelector('.front-end-btn');
  const backEndBtn = document.querySelector('.back-end-btn');
  const dataBaseBtn = document.querySelector('.data-handling-btn');
  const cmsPlatformBtn = document.querySelector('.cms-platform-btn');
  const toolsBtn = document.querySelector('.tools-btn');

  const frontEndSlide = document.querySelector('.frontend-logos');
  const backendSlide = document.querySelector('.backend-logos');
  const databaseSlide = document.querySelector('.db-logos');
  const cmsSlide = document.querySelector('.cms-logos');
  const toolsSlide = document.querySelector('.tools-logos');

  if(frontEndBtn.classList.contains('active')){
    frontEndSlide.classList.add('active');
  } else{                                                                   //frontend
    frontEndSlide.classList.remove('active');
  }

  if(backEndBtn.classList.contains('active')){
    backendSlide.classList.add('active');
  } else{                                                                      //backend
    backendSlide.classList.remove('active');
  }

  if(dataBaseBtn.classList.contains('active')){
    databaseSlide.classList.add('active');
  } else{                                                             //database
    databaseSlide.classList.remove('active');
  }

  if(cmsPlatformBtn.classList.contains('active')){
    cmsSlide.classList.add('active');
  } else{                                                             //cms platforms
    cmsSlide.classList.remove('active');
  }

  if(toolsBtn.classList.contains('active')){
    toolsSlide.classList.add('active');
  } else{                                                              //tools and apps
    toolsSlide.classList.remove('active');
  }
}