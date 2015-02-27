ls
#tree watched -L 10
#forever --minUptime 1000 --spinSleepTime 500 livereload.js $1
sudo node --harmony livereload.js $1
