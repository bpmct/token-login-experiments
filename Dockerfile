FROM nginx
ADD default.conf /etc/nginx/conf.d/
ADD loginProxy/ /usr/share/nginx/html/loginProxy