using System;
using System.Collections.Generic;
using System.Text;

namespace Bussiness_Layer.AppServices.DTOs
{
    public class BookingDTOs
    {
        public string CheckIn { get; set; }

        public string CheckOut { get; set; }

        public string Days { get; set; }

        public string Cost { get; set; }

        public int IsRated { get; set; }

        public string Address { get; set; }

        public string State { get; set; }

        public string Country { get; set; }

        public string Zip { get; set; }

        public string Phone { get; set; }
        public string BookingDates { get; set; }

    }
}
