var file_size;
var file_status;
var check_url="/presentation/"+document.URL.split("/")[6]+"/video.mp4";

get_filesize(check_url);

function get_filesize(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            file_size = parseInt(xhr.getResponseHeader("Content-Length"));
            file_status = xhr.status;
        }
    };
    xhr.send();
}

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

const start = async () => {
const $el = await _waitForElement(".top-bar");
  download_button_el_wrapper = document.createElement('div');
  download_button_el_wrapper.setAttribute("class", "button-wrapper");
  download_button_el = document.createElement('a');
  download_button_el.setAttribute("aria-label", "Presentation download is not ready yet! Please, reload page later!");
  download_button_el.setAttribute("title", "Presentation download is not ready yet! Please, reload page later!");
  download_button_el.setAttribute("onclick", "alert('Presentation download is not ready yet! Please, reload page later!');");
  download_button_el.style.cssText = 'text-decoration: none;';
  download_button_el.className += "button";
  download_button_el.className += " default";
  download_button_el.className += " circle";
  download_button_el_wrapper.appendChild(download_button_el);
  download_button_el_icon = document.createElement('span');
  download_button_el_icon.className += "icon-close";

  //console.log(file_size);
  //console.log(file_status);

      if ((file_status != 404)&&(file_size != 103)&&(file_size !='NaN')) {
        download_button_el.innerHTML = '';
        download_button_el.removeAttribute("onclick");
        download_button_el_icon.setAttribute("class","icon-videos");
        download_button_el.setAttribute("href", check_url);
          
        // Rename video.mp4 to <ID>.mp4 when downloading
        download_button_el.setAttribute("download", document.URL.split("/")[6] + ".mp4");    
          
        download_button_el.setAttribute("aria-label", "Download presentation. File size is "+Math.trunc(file_size/1024/1024)+" MB");
        download_button_el.setAttribute("title", "Download presentation. File size is "+Math.trunc(file_size/1024/1024)+" MB");
      }
  //}
  download_button_el.appendChild(download_button_el_icon);
  document.getElementsByClassName('left')[0].appendChild(download_button_el_wrapper);
};

start();
