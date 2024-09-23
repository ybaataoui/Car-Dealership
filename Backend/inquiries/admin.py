from django.contrib import admin
from .models import Inquiry
from django.utils.html import format_html

class InquiryAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'car_title', 'created_at')
    search_fields = ('first_name', 'last_name', 'email', 'car_title')
    list_filter = ('car_title', 'created_at')

# Register the Inquiry model with custom admin settings
admin.site.register(Inquiry, InquiryAdmin)

  