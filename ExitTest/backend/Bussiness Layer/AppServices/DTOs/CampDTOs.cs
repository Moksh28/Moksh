using System;
using System.Collections.Generic;
using System.Text;

namespace Bussiness_Layer.AppServices.DTOs
{
    public class CampDTOs
    {
        public int Rate { get; set; }

        public int Capacity { get; set; }

        public int RatingSum { get; set; }

        public int RatingCount { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }
        public string BookingDates { get; set; }
    }
}
