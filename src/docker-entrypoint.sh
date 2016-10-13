# remove existing sqlite3 if presetn
rm data/db.sqlite3

# sync database and collect static files
python manage.py syncdb --noinput
python manage.py collectstatic --noinput

# create super user accounts
echo "from django.contrib.auth.models import User; User.objects.create_superuser('jpatrick', 'jpatrick@cornerstonets.net', 'cornerstone-devel1!')" | python manage.py shell
echo "from django.contrib.auth.models import User; User.objects.create_superuser('gshaffer', 'gary.shaffer@cornerstonets.net', 'cornerstone-devel1!')" | python manage.py shell

# turn off DEBUG mode
sed -i s/'^DEBUG = True'/'DEBUG = False'/ cts/settings.py

# start gunicorn wsgi server
gunicorn cts.wsgi:application -b 0.0.0.0:8000
