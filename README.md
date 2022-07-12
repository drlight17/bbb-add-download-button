# bbb-add-download-button
![Screenshot](https://blogger.googleusercontent.com/img/a/AVvXsEin2qYLN1m6PPaz7p6XdAUXKCJb7vPKzDkwizyZJCQbPUoa4FaFS3uU9ajvSjyRmCKh7gQWWq5_XlhXYZQaOIsXdCjFaw_WkbDFDY0WvqkKcnFIk35K525heRuVbxpMVkJnUST1TjnAO5PmGYdwl-nXXzCbR8Xzb6btdewP3Iu4pg10dtsnecg)<br>
Add download full presentation mp4 button to player.

This created to work with `https://github.com/tilmanmoser/bbb-video-download` . Check check_url= parameter in source of bbb-download-button.js file and edit with your mp4 generated path.

# Install

## Place files

Place files `bbb-download-button.js` and `download.png` to the according path:

- `/var/bigbluebutton/playback/presentation/2.3/static/js/bbb-download-button.js`
- `/var/bigbluebutton/playback/presentation/2.3/static/media/download.png`

The `download.png` is created by **Vector Stall** and hosted in [flaticon](https://www.flaticon.com/premium-icon/play_5483888).


## Modify **index.html**

Add the following string at the end of \<body> tag in `./bigbluebutton/playback/presentation/2.3/index.html`:
  
````html
<script src="/playback/presentation/2.3/static/js/bbb-download-button.js"></script>
````

That's it.<br>

This is compatible with BBB 2.3+ with <a href=https://docs.bigbluebutton.org/dev/dev23.html#new-player-for-recordings>the new version of presentation player</a>. 

## For dockerized BBB

It also compatible with dockerized BBB, just doing following steps:

1. Place edited **index.html** file to `/bbb-docker/mod/nginx/bbb-playback/custom`
2. Place **bbb-download-button.js** file to `/bbb-docker/mod/nginx/bbb-playback/custom/static/js`
3. Add the following to the `/bbb-docker/mod/nginx/Dockerfile` to the end:

````dockerfile
COPY ./bbb-playback/custom /www/playback/presentation/2.3
````

----

# Tested with installed BBB 2.4 and dockerized BBB 2.5

For old 2.2 player see <a href=https://github.com/drlight17/bbb-add-download-button/tree/bbb-2.2-player-legacy>legacy branch</a>
