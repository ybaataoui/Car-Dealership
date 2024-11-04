from rest_framework import generics, permissions
from .serializers import  InquirySerializer, MessageSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Inquiry, Message
from Car.models import Car
from rest_framework.response import Response
from rest_framework.decorators import api_view

#Create a list of inquiries
class InquiryListCreate(generics.ListCreateAPIView):
    serializer_class = InquirySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Inquiry.objects.filter(customer=user).order_by('-created_at')
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(customer=self.request.user)
        else:
            print(serializer.errors)

#Delete an inquiry
class InquiryDelete(generics.DestroyAPIView):
    serializer_class = InquirySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Inquiry.objects.filter(customer=user)


@api_view(['POST'])
def CreateInquiryView(request):
    car_id = request.data.get('car_id')
    car = Car.objects.get(id=car_id)  # Retrieve the car by ID
    inquiry = Inquiry.objects.create(
        customer=request.user,
        car=car,
        first_name=request.data.get('first_name'),
        last_name=request.data.get('last_name'),
        customer_need=request.data.get('customer_need'),
        city=request.data.get('city'),
        state=request.data.get('state'),
        email=request.data.get('email'),
        phone=request.data.get('phone'),
        message=request.data.get('message'),
    )
    return Response({"message": "Inquiry created successfully!"})


class CreateMessageView(generics.CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.AllowAny]

    def get_serializer_context(self):
        context = super().get_serializer_context()
        if self.request.method == 'POST':
            context['require_car_id'] = 'car_id' in self.request.data
        return context