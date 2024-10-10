from django.contrib import admin
from .models import Inquiry, Message
from django.utils.html import format_html
from Car.models import Car


class InquiryAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer', 'car', 'first_name', 'last_name', 'email', 'created_at')
    search_fields = ('first_name', 'last_name', 'email')
    list_filter = ('customer', 'car', 'created_at')

class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_car_title', 'name', 'email', 'phone', 'message','created_at')
    search_fields = ('car','name')
    list_filter = ('car', 'created_at')

    #Method to diplay the car_titel
    def get_car_title(self, obj):
        return obj.car.car_title if obj.car else 'No Car'
    
    #set the column name in the admin list
    get_car_title.short_description = 'Subject'

# Register the Inquiry model with custom admin settings
admin.site.register(Inquiry, InquiryAdmin)
admin.site.register(Message, MessageAdmin)

  