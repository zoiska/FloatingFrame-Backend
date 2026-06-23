# FloatingFrame-Backend

Frontend at [zoiska/FloatingFrame](https://github.com/zoiska/FloatingFrame)
 
# NGINX Proxy

1. /etc/nginx/sites-available/default:

server {
    listen 443 ssl;
    server_name [SERVER_IP];
    ssl_certificate /etc/ssl/certs/signed.crt;
    ssl_certificate_key /etc/ssl/private/signedkey.key

    root /var/www/dist; -> muste be recopied on every build!

    index index.html;

    location / {
        try_files $uri /index.html =404;
    }

    location /api {
        proxy_pass http://127.0.0.1:3000; -> if this is "proxy_pass http://127.0.0.1:3000/;" it will break
    }
}

2. delete any shit in /etc/nginx/sites-enabled/

3. ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/ -> make simlink, test via "sudo nginx -t"

4. sudo sytsemctl restart nginx