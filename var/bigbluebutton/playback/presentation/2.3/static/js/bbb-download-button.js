function _waitForElement(selector, delay = 50, tries = 10000) {
    const element = document.querySelector(selector);
    if (!window[`__${selector}`]) {
      window[`__${selector}`] = 0;
    }
    function _search() {
      return new Promise((resolve) => {
        window[`__${selector}`]++;
        setTimeout(resolve, delay);
      });
    }
    if (element === null) {
      if (window[`__${selector}`] >= tries) {
        window[`__${selector}`] = 0;
        return Promise.reject(null);
      }
      return _search().then(() => _waitForElement(selector));
    } else {
      return Promise.resolve(element);
    }
};

const start = (async () => {
  const $el = await _waitForElement(".top-bar");
    download_button_el_wrapper = document.createElement('div');
    download_button_el_wrapper.setAttribute("class", "button-wrapper");
    download_button_el = document.createElement('a');
    download_button_el.setAttribute("aria-label", "Download MP4 presentatioт");
    download_button_el.setAttribute("title", "Download MP4 presentatioт");
    download_button_el.setAttribute("download","video.mp4");
    download_button_el.style.cssText = 'text-decoration: none;';
    download_button_el.className += "button";
    download_button_el.className += " default";
    download_button_el.className += " circle";
    download_button_el_wrapper.appendChild(download_button_el);
    download_button_el_icon = document.createElement('span');
    download_button_el_icon.className += "icon-videos";

    console.log(document.URL.split("/")[6]);
    var check_url="/presentation/"+document.URL.split("/")[6]+"/video.mp4";
    var http = new XMLHttpRequest();
    http.open('HEAD', check_url, false);
    http.send();
    if (http.status != 404) {
        download_button_el.setAttribute("href", "location.href='"+check_url+"';");
    } else {
        download_button_el_icon.setAttribute("class","icon-close");
        download_button_el.setAttribute("title", "MP4 file is not ready yet! Reload page later!");
        download_button_el.setAttribute("onclick", "alert('MP4 file is not ready yet! Reload page later!');");
    }
    download_button_el.appendChild(download_button_el_icon);
    document.getElementsByClassName('left')[0].appendChild(download_button_el_wrapper);

})();
