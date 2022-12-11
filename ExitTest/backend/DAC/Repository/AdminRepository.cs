
using DAC.DatabaseContext;
using DAC.Entities;
using DAC.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CampBooking.DAC.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly CampBookingDBContext _context = null;

        public AdminRepository(CampBookingDBContext context)
        {
            _context = context;
        }

        public async Task<List<Admin>> GetAdmins()
        {
            return await _context.Admins.ToListAsync();
        }

        /*
         * Not Used
        public async Task<bool> Register(Admin admin)
        {
            await _context.Admins.AddAsync(admin);
            await _context.SaveChangesAsync();
            return true;
        }
        */

        public async Task<bool> Login(Admin admin)
        {
            List<Admin> adminList = await _context.Admins.ToListAsync();
            Admin foundAdmin = (from e in adminList
                                where e.Email == admin.Email
                                select e).FirstOrDefault();
            if(foundAdmin==null)
            {
                return false;
            }
            if(foundAdmin!=null)
            {
                if(foundAdmin.Password==admin.Password)
                {
                    return true;
                }
            }
            return false;
        }

        public async Task<Guid> AddNewCamp(Camp camp)
        {
            await _context.Camps.AddAsync(camp);
            await _context.SaveChangesAsync();
            return camp.Id;
        }

        public async Task<bool> UpdateCamp(Camp camp)
        {
            Camp campToUpdate = await _context.Camps.FindAsync(camp.Id);
            if (campToUpdate != null)
            {
                campToUpdate.Title = camp.Title;
                campToUpdate.Rate = camp.Rate;
                campToUpdate.Capacity = camp.Capacity;
                campToUpdate.Description = camp.Description;
                campToUpdate.Image = camp.Image;
                // For Image URL

                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<bool> DeleteCamp(Guid id)
        {
            Camp campToDelete = await _context.Camps.FindAsync(id);

            if (campToDelete != null)
            {
                List<Booking> bookingList = new List<Booking>();
                List<Booking> allBookingList = await _context.Bookings.ToListAsync();
                foreach (Booking val in allBookingList)
                {
                    if (val.CampId == id.ToString()) bookingList.Add(val);
                    else continue;
                }
                _context.Camps.Remove(campToDelete);
                foreach (Booking val in bookingList)
                {
                    _context.Bookings.Remove(val);
                }
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        
    }
}