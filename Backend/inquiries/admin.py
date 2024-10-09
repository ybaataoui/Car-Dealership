from django.contrib import admin
from .models import Inquiry, Message
from django.utils.html import format_html
from Car.models import Car


class InquiryAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer', 'car', 'first_name', 'last_name', 'email', 'created_at')
    search_fields = ('first_name', 'last_name', 'email')
    list_filter = ('customer', 'car', 'created_at')

class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'car', 'name', 'email', 'phone', 'message','created_at')
    search_fields = ('car','name')
    list_filter = ('car', 'created_at')

# Register the Inquiry model with custom admin settings
admin.site.register(Inquiry, InquiryAdmin)
admin.site.register(Message, MessageAdmin)

  