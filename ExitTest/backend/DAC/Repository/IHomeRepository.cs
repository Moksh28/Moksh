using DAC.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAC.Repository
{
    public interface IHomeRepository
    {
        Task<string> BookACamp(Booking booking, string dates);
        Task<bool> CancelBooking(string id);
        Task<Camp> GetACamp(string id);
        Task<Booking> GetBookingById(string id);
        Task<List<Camp>> GetCamps();
        Task<bool> RateCamp(string bookingId, string campId, int rating);
    }
}