from django.contrib import admin
from django.db.models.fields.related import ForeignKey
from django.http import HttpRequest
from .models import Car, Make, CarModel
from django.utils.html import format_html
from django import forms
from dal import autocomplete

class CarAdminForm(forms.ModelForm):
    class Meta:
        model = Car
        fields = '__all__'
        widgets = {
            'make' : autocomplete.ModelSelect2(url='make-autocomplete'),
            'model' : autocomplete.ModelSelect2(url='carmodel-autocomplete', forward=['make']),
        }

    
@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    form = CarAdminForm

    @admin.display(description='Car Image')
    def thumbnail(self, obj):
        if obj.car_photo:
            return format_html('<img src="{}" width="50" style="border-radius: 50px;" />'.format(obj.car_photo.url))
        else:
            return 'No Image'

    list_display = ('id', 'thumbnail', 'car_title', 'city', 'color', 'model', 'year', 'body_style', 'fuel_type', 'is_featured')
    list_display_links = ('id', 'thumbnail', 'car_title')
    list_editable = ('is_featured',)
    search_fields = ('id', 'model', 'body_style', 'fuel_type')
    list_filter = ('city', 'model', 'body_style', 'fuel_type', 'year')


class CarModelInline(admin.TabularInline):
    model = CarModel
    extra = 1

class MakeAdmin(admin.ModelAdmin):
    inlines = [CarModelInline]

admin.site.register(Make, MakeAdmin)

