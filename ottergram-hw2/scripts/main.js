//data-taco attribute was added to HTML otter images for query purposes
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

var randomnum = Math.floor(Math.random() * 5)+1; //choose random otter 1-5

var tacocaturl = 'https://cdn.dribbble.com/users/977419/screenshots/3279713/tacocat1-fat.jpg';

function setDetails(imageUrl, titleText){
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src',imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;

  //if thumbnail is currently tacocat upon click then
  if(imageUrl.includes(randomnum)){
    //restore otter image before setting new taco cat
    document.querySelector('[data-taco="' + randomnum + '"]').setAttribute('src','img/otter' + randomnum + '.jpg');
    //choose new otter number
    randomnum = Math.floor(Math.random() * 5)+1;
    //replace new otter number's thumb with tacocat
    document.querySelector('[data-taco="' + randomnum + '"]').setAttribute('src',tacocaturl);
  }
}

function imageFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail){
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb){
  'use strict';
  thumb.addEventListener('click',function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);

  //set one otter as tacocat upon initialization
  document.querySelector('[data-taco="' + randomnum + '"]').setAttribute('src',tacocaturl);
}
initializeEvents();
