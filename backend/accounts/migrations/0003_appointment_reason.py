# Generated by Django 5.1.1 on 2024-09-09 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_appointment'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='reason',
            field=models.TextField(default='', max_length=255),
        ),
    ]
