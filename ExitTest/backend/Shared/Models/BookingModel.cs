using System;
using System.Collections.Generic;
using System.Text;

namespace Shared.Models
{
    public class BookingModel
    {
        public string Id { get; set; }

        //public Camp Camp { get; set; }
        public string CampId { get; set; }

        public string CheckIn { get; set; }

        public string CheckOut { get; set; }

        public int IsRated { get; set; }

        public string Days { get; set; }

        public string Cost { get; set; }

        public string Address { get; set; }

        public string State { get; set; }

        public string Country { get; set; }

        public string Zip { get; set; }

        public string Phone { get; set; }

        public string BookingDates { get; set; }
    }
}
