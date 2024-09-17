from django.contrib import admin
from .models import Car
from django.utils.html import format_html

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    @admin.display(description='Car Image')
    def thumbnail(self, obj):
        return format_html(f'<img src="{obj.car_photo.url}" width="40" style="border-radius: 50px;" />')

    list_display = ('id', 'thumbnail', 'car_title', 'city', 'color', 'model', 'year', 'body_style', 'fuel_type', 'is_featured')
    list_display_links = ('id', 'thumbnail', 'car_title')
    list_editable = ('is_featured',)
    search_fields = ('id', 'model', 'body_style', 'fuel_type')
    list_filter = ('city', 'model', 'body_style', 'fuel_type')
