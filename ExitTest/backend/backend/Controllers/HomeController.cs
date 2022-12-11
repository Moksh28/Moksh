using AutoMapper;
using DAC.Entities;
using DAC.Repository;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IHomeRepository _homeRepository = null;
        private readonly IWebHostEnvironment _webHostEnvironment = null;
        private readonly IMapper _mapper;

        public HomeController(IHomeRepository homeRepository, IWebHostEnvironment webHostEnvironment, IMapper mapper)
        {
            _homeRepository = homeRepository;
            _webHostEnvironment = webHostEnvironment;
            _mapper = mapper;
        }

        [HttpGet, Route("all-camps")]
        public async Task<List<Camp>> GetCamps()
        {
            return await _homeRepository.GetCamps();
        }

        [HttpPost, Route("book-a-camp/{dates}")]
        public async Task<bool> BookACamp(BookingModel bookingModel, string dates)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Booking booking = _mapper.Map<BookingModel, Booking>(bookingModel);
                    string res = await _homeRepository.BookACamp(booking, dates);
                    if (string.IsNullOrEmpty(res)) return false;
                    return true;
                }
                else throw new Exception("Some field is missing!");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [HttpGet, Route("get-camp/{id}")]
        public async Task<BookingModel> GetBookingById(string id)
        {
            try
            {
                Booking booking = await _homeRepository.GetBookingById(id);
                if (booking == null)
                {
                    throw new Exception("Not Found!");
                }
                return _mapper.Map<Booking, BookingModel>(booking);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet, Route("manage-camp/{reference}")]
        public async Task<BookingModel> GetBookingByRef(string reference)
        {
            try
            {
                if (string.IsNullOrEmpty(reference))
                {
                    throw new Exception("Reference can't be null.");
                }
                Booking foundBooking = await _homeRepository.GetBookingById(reference);
                if (foundBooking == null)
                {
                    return null;
                }
                return _mapper.Map<Booking, BookingModel>(foundBooking);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet, Route("cancel-booking/{id}")]
        public async Task<bool> CancelBooking(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                throw new Exception("Id can't be null.");
            }
            return await _homeRepository.CancelBooking(id);
        }

        [HttpGet, Route("rate-camp/{bookingId}/{campId}/{rating}")]
        public async Task<bool> RateCamp(string bookingId, string campId, int rating)
        {
            try
            {
                if (string.IsNullOrEmpty(bookingId)) throw new Exception("Booking Id can't be null.");
                if (string.IsNullOrEmpty(campId)) throw new Exception("Camp Id can't be null.");
                if (rating <= 0) throw new Exception("Camp Rating must be greater than 0.");
                return await _homeRepository.RateCamp(bookingId, campId, rating);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
