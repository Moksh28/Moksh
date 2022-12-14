using System;
using System.Collections.Generic;
using System.Text;

namespace Shared.Models
{
    public class CampModel
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public int Rate { get; set; }

        public int Capacity { get; set; }

        public int RatingSum { get; set; }

        public int RatingCount { get; set; }

        public string Description { get; set; }
        public string BookingDates { get; set; }

        public string Image { get; set; }
    }
}
