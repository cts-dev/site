FROM python:2

RUN pip install gunicorn django==1.7

ADD ./src /app
WORKDIR /app

# sync database and collect static files
RUN python manage.py syncdb --noinput
RUN python manage.py collectstatic --noinput

# create super user accounts
RUN echo "from django.contrib.auth.models import User; User.objects.create_superuser('jpatrick', 'jpatrick@cornerstonets.net', 'cornerstone-devel1!')" | python manage.py shell
RUN echo "from django.contrib.auth.models import User; User.objects.create_superuser('gshaffer', 'gary.shaffer@cornerstonets.net', 'cornerstone-devel1!')" | python manage.py shell

# turn off DEBUG mode
RUN sed -i s/'DEBUG = True'/'DEBUG = False'/ src/cts/settings.py

CMD gunicorn cts.wsgi:application -b 0.0.0.0:8000
