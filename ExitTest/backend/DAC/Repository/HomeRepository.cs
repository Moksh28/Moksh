using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAC.Entities;
using DAC.DatabaseContext;
using DAC.Repository;

namespace CampBooking.DAC.Repository
{
    public class HomeRepository : IHomeRepository
    {
        private readonly CampBookingDBContext _context = null;

        public HomeRepository(CampBookingDBContext context)
        {
            _context = context;
        }

        public async Task<List<Camp>> GetCamps()
        {
            return await _context.Camps.ToListAsync();
        }

        public async Task<bool> AddBookingDates(string id, string dates)
        {
            List<Camp> campList = await _context.Camps.ToListAsync();
            Camp camp = (from el in campList where el.Id.ToString() == id select el).FirstOrDefault();
            if (camp == null) return false;
            if (camp.BookingDates != null) camp.BookingDates += ',' + dates;
            else camp.BookingDates += dates;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<string> BookACamp(Booking booking, string dates)
        {
            booking.BookingDates = dates;
            await _context.Bookings.AddAsync(booking);
            await this.AddBookingDates(booking.CampId.ToString(), dates);
            await _context.SaveChangesAsync();
            return booking.Id;
        }

        public async Task<Booking> GetBookingById(string id)
        {
            List<Booking> bookingList = await _context.Bookings.ToListAsync();
            Booking foundBookingModel = (from e in bookingList where e.Id == id select e).FirstOrDefault();
            return foundBookingModel ?? null;
        }

        public async Task<bool> CancelBooking(string id)
        {
            List<Booking> bookingList = await _context.Bookings.ToListAsync();
            Booking foundBookingModel = (from e in bookingList where e.Id == id select e).FirstOrDefault();
            if (foundBookingModel != null)
            {
                _context.Bookings.Remove(foundBookingModel);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<Camp> GetACamp(string id)
        {
            List<Camp> campList = await _context.Camps.ToListAsync();
            Camp foundCamp = (from el in campList where el.Id.ToString() == id select el).FirstOrDefault();
            return foundCamp ?? null;
        }

        public async Task<bool> RateCamp(string bookingId, string campId, int rating)
        {
            Camp foundCamp = await GetACamp(campId);
            Booking foundBooking = await GetBookingById(bookingId);
            if (foundCamp == null)
            {
                return false;
            }
            foundCamp.RatingCount += 1;
            foundCamp.RatingSum += rating;
            foundBooking.IsRated = 1;
            await _context.SaveChangesAsync();
            return true;
        }

        public Task<string> BookACamp(Booking booking)
        {
            throw new NotImplementedException();
        }
    }
}