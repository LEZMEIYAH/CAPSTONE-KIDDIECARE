from django.contrib import admin
from .models import CustomUser
from .models import Appointment
from .forms import CustomUserChangeForm, CustomUserCreationForm
from django.contrib.auth.admin import UserAdmin

@admin.register(CustomUser)
class CustomAdminUser(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm

    model = CustomUser

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('patient_name', 'date', 'time', 'reason')
    search_fields = ('patient_name', 'date')
    list_filter = ('date', 'time')
    
