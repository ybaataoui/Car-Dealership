# Generated by Django 5.1.1 on 2024-10-10 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inquiries', '0004_message_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='subject',
            field=models.CharField(max_length=255),
        ),
    ]