FROM python:2

RUN pip install gunicorn django==1.7

ADD ./src /app
WORKDIR /app

RUN chmod +x docker-entrypoint.sh

CMD ./docker-entrypoint.sh
