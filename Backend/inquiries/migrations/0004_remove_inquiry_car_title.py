# Generated by Django 5.1.1 on 2024-09-24 02:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inquiries', '0003_inquiry_car_alter_inquiry_customer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='inquiry',
            name='car_title',
        ),
    ]