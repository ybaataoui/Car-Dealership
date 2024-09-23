from rest_framework import generics
from .serializers import  InquirySerializer
from rest_framework.permissions import IsAuthenticated
from .models import Inquiry

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
    
class CreateInquiryView(generics.CreateAPIView):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer
    permission_classes = [IsAuthenticated]

   