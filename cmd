
-------------------------ws node --------------------------------
ffmpeg -f dshow -i video="USB2.0 PC CAMERA" -preset ultrafast -f mpegts -codec:v mpeg1video -s 640x480 -b:v 1024k -bf 0 udp://127.0.0.1:8080