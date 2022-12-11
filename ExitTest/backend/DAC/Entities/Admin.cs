using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAC.Entities
{
    public class Admin
    {
        [Key]
        public string Email { get; set; }


        [Required]
        public string Password { get; set; }
    }
}
