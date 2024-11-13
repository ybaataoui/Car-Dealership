import shutil
import os
from datetime import datetime
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Backup the SQLite database'

    def handle(self, *args, **kwargs):
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        backup_folder = 'backups'
        if not os.path.exists(backup_folder):
            os.makedirs(backup_folder)
        backup_filename = f'db_backup_{timestamp}.sqlite3'
        backup_path = os.path.join(backup_folder, backup_filename)
        shutil.copy2('db.sqlite3', backup_path)
        self.stdout.write(self.style.SUCCESS(f'Backup created: {backup_path}'))
