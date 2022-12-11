using DAC.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAC.DatabaseContext
{
    public class CampBookingDBContext:DbContext
    {
        public virtual DbSet<Admin> Admins { get; set; }



        public virtual DbSet<Camp> Camps { get; set; }
        public virtual DbSet<Booking> Bookings { get; set; }


        public CampBookingDBContext(DbContextOptions<CampBookingDBContext> options)
             : base(options)
        { }




        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { }
    }
}
