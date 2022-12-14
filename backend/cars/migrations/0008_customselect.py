# Generated by Django 4.0.4 on 2022-10-26 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0007_personnelweaponslongarm_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomSelect',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('powercore', models.CharField(max_length=12)),
                ('thruster', models.CharField(max_length=12)),
                ('armor', models.CharField(max_length=12)),
                ('computer', models.CharField(max_length=12)),
                ('crewQuarter', models.CharField(max_length=12)),
                ('defensiveCountermasure', models.CharField(max_length=12)),
                ('driftEngine', models.CharField(max_length=12)),
                ('expansionBay', models.CharField(max_length=12)),
                ('security', models.CharField(max_length=12)),
                ('sensor', models.CharField(max_length=12)),
                ('shield', models.CharField(max_length=12)),
                ('weapon', models.CharField(max_length=12)),
            ],
        ),
    ]
