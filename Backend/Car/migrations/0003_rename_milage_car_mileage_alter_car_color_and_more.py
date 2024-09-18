# Generated by Django 5.1.1 on 2024-09-17 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Car', '0002_alter_car_body_style_alter_car_transmission'),
    ]

    operations = [
        migrations.RenameField(
            model_name='car',
            old_name='milage',
            new_name='mileage',
        ),
        migrations.AlterField(
            model_name='car',
            name='color',
            field=models.CharField(choices=[('Red', 'Red'), ('Blue', 'Blue'), ('Green', 'Green'), ('Yellow', 'Yellow'), ('Orange', 'Orange'), ('Purple', 'Purple'), ('Pink', 'Pink'), ('Brown', 'Brown'), ('Black', 'Black'), ('White', 'White'), ('Gray', 'Gray'), ('Cyan', 'Cyan'), ('Magenta', 'Magenta'), ('Teal', 'Teal'), ('Lime', 'Lime'), ('Olive', 'Olive'), ('Navy', 'Navy'), ('Maroon', 'Maroon'), ('Silver', 'Silver'), ('Gold', 'Gold')], max_length=100),
        ),
        migrations.AlterField(
            model_name='car',
            name='fuel_type',
            field=models.CharField(choices=[('Cruise Control', 'Cruise Control'), ('Audio Interface', 'Audio Interface'), ('Airbags', 'Airbags'), ('Air Conditioning', 'Air Conditioning'), ('Seat Heating', 'Seat Heating'), ('Alarm System', 'Alarm System'), ('ParkAssist', 'ParkAssist'), ('Power Steering', 'Power Steering'), ('Reversing Camera', 'Reversing Camera'), ('Direct Fuel Injection', 'Direct Fuel Injection'), ('Auto Start/Stop', 'Auto Start/Stop'), ('Wind Deflector', 'Wind Deflector'), ('Bluetooth Handset', 'Bluetooth Handset')], max_length=50),
        ),
        migrations.AlterField(
            model_name='car',
            name='interior',
            field=models.CharField(choices=[('Red', 'Red'), ('Blue', 'Blue'), ('Green', 'Green'), ('Yellow', 'Yellow'), ('Orange', 'Orange'), ('Purple', 'Purple'), ('Pink', 'Pink'), ('Brown', 'Brown'), ('Black', 'Black'), ('White', 'White'), ('Gray', 'Gray'), ('Cyan', 'Cyan'), ('Magenta', 'Magenta'), ('Teal', 'Teal'), ('Lime', 'Lime'), ('Olive', 'Olive'), ('Navy', 'Navy'), ('Maroon', 'Maroon'), ('Silver', 'Silver'), ('Gold', 'Gold')], max_length=100),
        ),
    ]