# Generated by Django 5.1.1 on 2024-10-09 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Car', '0003_alter_car_make_alter_car_model'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='condition',
            field=models.CharField(choices=[('New', 'New'), ('Used', 'Used'), ('Certified', 'Certified')], max_length=100),
        ),
    ]