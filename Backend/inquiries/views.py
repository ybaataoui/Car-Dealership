from rest_framework import generics
from .serializers import  InquirySerializer
from rest_framework.permissions import IsAuthenticated
from .models import Inquiry
from Car.models import Car
import logging

#Create a list of inquiries
class InquiryListCreate(generics.ListCreateAPIView):
    serializer_class = InquirySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Inquiry.objects.filter(customer=user)
    
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

logger = logging.getLogger(__name__)    
class CreateInquiryView(generics.CreateAPIView):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        logger.info("Incoming data: %s", self.request.data)
        serializer.save(customer=self.request.user)


   