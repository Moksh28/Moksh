using DAC.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAC.Repository
{
    public interface IAdminRepository
    {
        Task<bool> Login(Admin admin);

        Task<Guid> AddNewCamp(Camp camp);

        Task<bool> UpdateCamp(Camp camp);

        Task<bool> DeleteCamp(Guid id);

        Task<List<Admin>> GetAdmins();
    }
}