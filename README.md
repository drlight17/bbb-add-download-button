# bbb-add-download-button
![Screenshot](https://github.com/drlight17/bbb-add-download-button/raw/main/screenshot.JPG)<br>
Add download full presentation mp4 button to player<br>
This created to work with https://github.com/tilmanmoser/bbb-video-download<br>
Check check_url= parameter in source of bbb-download-button.js file and edit with your mp4 generated path.<br>
Place file bbb-download-button.js to the according path<br>
Add the following string at the end of \<body> tag in ./bigbluebutton/playback/presentation/2.3/index.html:<br>
  
`<script src="/playback/presentation/2.3/static/js/bbb-download-button.js"></script>`

That's it.<br>
This is compatible with BBB 2.3+ with <a href=https://docs.bigbluebutton.org/dev/dev23.html#new-player-for-recordings>the new version of presentation player</a>
It also compatible with dockerized BBB, just place edited index.html file to /bbb-docker/mod/nginx/bbb-playback/custom, bbb-download-button.js file to /bbb-docker/mod/nginx/bbb-playback/custom/static/js and add the following to the /bbb-docker/mod/nginx/Dockerfile to the end:

`COPY ./bbb-playback/custom /www/playback/presentation/2.3`

### Tested with installed BBB 2.4 and dockerized BBB 2.5
For old 2.2 player see <a href=https://github.com/drlight17/bbb-add-download-button/tree/bbb-2.2-player-legacy>legacy branch</a>
### Issues
Sometimes there are [issues](https://github.com/tilmanmoser/bbb-video-download/issues/79) with bbb-video-download (post_publish hooks or dockerized bbb compatibility) and as a workaround I've created <a href=https://github.com/drlight17/bbb-video-download-manual-init>a manual init script</a> to run a scheduled task of creation mp4.
