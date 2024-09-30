# Generated by Django 5.1.1 on 2024-09-27 21:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Car', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CarModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('make', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='models', to='Car.make')),
            ],
        ),
    ]
