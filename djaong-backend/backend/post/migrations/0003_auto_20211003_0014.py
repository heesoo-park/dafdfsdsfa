# Generated by Django 3.2.7 on 2021-10-02 15:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_auto_20211002_2316'),
    ]

    operations = [
        migrations.RenameField(
            model_name='steam_gameinfo',
            old_name='all_reviesw',
            new_name='all_reviews',
        ),
        migrations.AlterModelTable(
            name='steam_gameinfo',
            table='steam_gameInfo',
        ),
    ]