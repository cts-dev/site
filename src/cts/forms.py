from django.forms import ModelForm

from models import Prospect


class ProspectForm(ModelForm):
    class Meta:
        model = Prospect
        exclude = []