# Generated by Django 5.1.1 on 2024-09-30 14:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Car', '0002_carmodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='make',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Car.make'),
        ),
        migrations.AlterField(
            model_name='car',
            name='model',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Car.carmodel'),
        ),
    ]