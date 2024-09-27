FROM richarvey/nginx-php-fpm:latest

COPY . .

# Image config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 0
ENV REAL_IP_HEADER 1


# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

RUN sed -i 's#try_files $uri $uri/ =404;#try_files $uri $uri/ $uri.html /$uri.php?$args;#g' /etc/nginx/sites-available/default.conf

EXPOSE 80

CMD ["/start.sh"]