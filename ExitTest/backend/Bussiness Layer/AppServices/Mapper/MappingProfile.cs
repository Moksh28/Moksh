using AutoMapper;
using Bussiness_Layer.AppServices.DTOs;
using DAC.Entities;
using Shared.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bussiness_Layer.AppServices.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile() : base("MappingProfile")
        {
            CreateMap<Admin, AdminDTOs>().ReverseMap();
            CreateMap<AdminModel, AdminDTOs>().ReverseMap();
            CreateMap<AdminModel, Admin>().ReverseMap();
            CreateMap<Camp, CampDTOs>().ReverseMap();

            CreateMap<CampModel, CampDTOs>().ReverseMap();

            CreateMap<CampModel, Camp>().ReverseMap();



            CreateMap<Booking, BookingDTOs>().ReverseMap();

            CreateMap<BookingModel, BookingDTOs>().ReverseMap();

            CreateMap<BookingModel, Booking>().ReverseMap();
        }
    }
}
