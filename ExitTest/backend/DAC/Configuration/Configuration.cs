using CampBooking.DAC.Repository;
using DAC.Repository;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAC.Configuration
{
    public static class Configuration
    {
        public static void RegisterRepositories(this IServiceCollection service)
        {
            service.AddSingleton<IAdminRepository, AdminRepository>();
            service.AddSingleton<IHomeRepository, HomeRepository>();
        }
    }
}
